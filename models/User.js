const { Model, DataTypes } = require("sequelize");
    //--BCRYPT FOR HASHING PASSWORD--//
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
    // set up a method to run on instance data (per user) to check passwords
};

User.init(
    { 
        // Finish the user model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6],
            },
        },
    },
    {
    hooks: {
        //--HOOK FOR HASHING PASSWORD BEFORE CREATING A NEW USER--//
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
         // beforeUpdate: async () => {}
         
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "User"
    }
);

module.exports = User;