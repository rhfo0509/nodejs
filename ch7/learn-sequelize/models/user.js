const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  // static init --> static initiate
  // return super.init --> Model.init
  static initiate(sequelize) {
    User.init(
      {
        // id는 sequelize에서 자동으로 생성
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: Sequelize.TINYINT.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE, // MYSQL DATETIME, MYSQL DATE <-> Sequelize.DATEONLY
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        // 두 번째 인수: 모델에 대한 설정
        sequelize,
        timestamps: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  }
}

module.exports = User;
