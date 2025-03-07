import { query } from "../../database/conecction";
import { User, VerifyLogin } from "../domain/user";
import { IUserRepository } from "../domain/userRepository";
import { compare, encrypt } from './helpers/hash';
import { tokenSigIn } from "./helpers/token";





export class UserMysqlRepository implements IUserRepository {
  async registerUser(name: string, email: string, password: string, height: number, weight: number, sex: string): Promise<User | null> {
    try {

      const checkEmailSql = `
                SELECT COUNT(*) as emailCount
                FROM usuario
                WHERE correo = ?;
                `;

            const [emailResults]: any = await query(checkEmailSql, [email]);
            if (emailResults[0].emailCount > 0) {
                throw new Error("El correo electrónico ya está registrado en la base de datos.");
            }
      
      const hashPassword = await encrypt(password);
      const sql = "INSERT INTO usuario (nombre, correo, contraseña, altura, peso, gender) VALUES (?, ?, ?, ?, ?, ?)";
      const params: any[] = [name, email, hashPassword, height, weight, sex];
      const [result]: any = await query(sql, params);
      if (result.insertId) {
        // Crear una instancia de User con el ID generado
        const user = new User(result.insertId, name, email, hashPassword, height, weight, sex);
        return user;
      } else {
        console.error("No se pudo insertar el usuario en la base de datos.");
        return null;
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      return null;
    }
  }

  async loginUser(email: string, password: string): Promise<VerifyLogin | null> {
    try {
        const userSql = "SELECT UserID AS userid, nombre AS username, correo AS email, contraseña AS password FROM usuario WHERE correo = ? LIMIT 1";
        const [userRows]: any = await query(userSql, [email]);

        if (!Array.isArray(userRows) || userRows.length === 0) {
            return null; // El usuario no existe
        }

        const userRow = userRows[0];

        const isPasswordMatch = await compare(password, userRow.password);

        if (!isPasswordMatch) {
            return null; // Contraseña incorrecta
        }

        // Generate a JWT token using your tokenSigIn function
        const token: string = tokenSigIn(userRow.username, userRow.email);

        const user = new VerifyLogin(
            userRow.userid,
            userRow.username,
            userRow.email,
            token
        );

        return user;
    } catch (error) {
        console.error("Error en loginUser:", error);
        return null;
    }
}




  async listAllUsers(): Promise<User[] | any> {
    try {
      const sql = "SELECT * FROM usuario"; // Cambiado a "Users" con mayúscula según la tabla de la base de datos
      const [rows]: any = await query(sql);

      if (!Array.isArray(rows)) {
        throw new Error('Rows is not an array');
      }

      // Mapear los resultados directamente a instancias de User
      const users: User[] = rows.map((row: any) => {
        console.log("row: ", row);
        return new User(
          row.userid,
          row.nombre,
          row.correo,
          row.contraseña,
          row.altura,
          row.peso,
          row.gender
         
        );
      });

      return users;
    } catch (error) {
      console.error("Error al listar usuarios:", error);
      return null; // Opcionalmente, podrías lanzar una excepción en lugar de retornar null
    }
  }

  
  async deleteUserById(id: number): Promise<string | null> {
    try {
        const sql = 'DELETE FROM usuario WHERE userid = ?';
        const result: any = await query(sql, [id]);

        if (!result || result.affectedRows === 0) {
            return 'No se encontró ningún usuario con el ID proporcionado.';
        }

        return 'Usuario eliminado exitosamente.';
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error; // Puedes manejar el error de la manera que prefieras o simplemente lanzarlo para que se maneje en un nivel superior.
    }
}

async getUserById(id: number): Promise<User | null> {
  try {
    const sql = "SELECT userid, nombre, correo, altura, peso, gender FROM usuario WHERE userid = ? LIMIT 1";
    const [rows]: any = await query(sql, [id]);

    // Verificar si no se encontraron resultados o si la respuesta es vacía
    if (!Array.isArray(rows) || rows.length === 0) {
      return null;
    }

    const row = rows[0];
    const userData = new User(
      row.userid,
      row.nombre,
      row.correo,
      row.contraseña,
      row.altura,
      row.peso,
      row.gender,
    );

    
    return userData;
  } catch (error) {
    console.error("Error en getUserById:", error);
    return null;
  }
}
async listAllInactiveUser(): Promise<User[] | null> {
  try {
      const sql = "SELECT * FROM usuario WHERE cuentaactiva = false"; // SQL modificado para filtrar por status
      const [rows]: any = await query(sql); // Esto probablemente devuelve un tipo de dato más complejo

      if (!Array.isArray(rows)) {
          throw new Error('Error'); // Puedes manejar este caso según tus necesidades
      }

      const users: User[] = rows.map(row => new User(row.id, row.name, row.phone, row.email, row.password, row.active, row.canlent));
      return users;
  } catch (error) {
      console.error("Error en listAllInactiveUser:", error);
      return null; // Retorna null en caso de error o podrías optar por retornar un array vacío dependiendo de tu lógica de negocio
  }
}



async setAsInactive(id: number | null): Promise<number | null> {
  try {
      const sql = 'UPDATE usuario SET cuentaactiva = false WHERE userid = ?';
      const [resultSet]: any = await query(sql, [id || null]);

      if (!resultSet || resultSet.affectedRows === 0) {
          return null;
      }
      return id;
  } catch (error) {
      console.error('Error al activar el usuario:', error);
      throw new Error('No se pudo activar el usuario.'); // O maneja el error de la manera que prefieras.
  }
}


}
