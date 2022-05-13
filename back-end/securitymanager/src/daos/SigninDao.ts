import mongoose = require('mongoose');
import * as crypto from 'crypto';
import UserModel from '../models/User';
import RoleModel from '../models/Role';
import * as jwt from 'jsonwebtoken';
import * as asyncLoop from 'node-async-loop';
var jwtDecode = require('jwt-decode');
import { CustomLogger } from '../config/Logger';
export class SigninDao {
    private data: any
    private userrole: any;
    private rolevalue: any;
    private signuprole: any;
    private userDetails: any;
    private mailboolean: boolean;
    private Idtoken: any;

    public signindao(userData, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: signindao');
        RoleModel.find().then(async result => {
            asyncLoop(result, (roles, next) => {
                if (roles.role === 'User') {
                    console.log(roles.role === 'User');
                    this.signuprole = roles._id;
                    console.log(this.signuprole);
                }
                next();
            }, (err) => {
                if (err) {
                    return err;
                }
            })
            this.userDetails = {
                'firstname': userData.firstname,
                'lastname': userData.lastname,
                'password': crypto.createHash('md5').update(userData.password).digest('hex'),
                'email': userData.email,
                'username': userData.email,
                'role': this.signuprole,
                'Idtoken': '',
                'avatar': userData.avatar

            };
            console.log("this.userdetails--->", this.userDetails);
            UserModel.find().then(data => {
                if (data.length !== 0) {
                    asyncLoop(data, (users, next) => {
                        if (users.email === this.userDetails.email) {
                            this.mailboolean = true;
                        } else {
                            this.mailboolean = false;
                        }
                        next();
                    }, (error) => {
                        if (error) {
                            return error;
                        }
                    });
                    if (this.mailboolean === true) {
                        var mailresponse = 'Email is already exists';
                        new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: signindao');
                        callback(mailresponse);
                    } else {
                        let logincreds = new UserModel(this.userDetails);
                        logincreds.save().then((result) => {
                            console.log("result--->", result);
                            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: signindao');
                            callback(result);
                        }).catch((error) => {
                            callback(error);
                        })
                    }
                } else {
                    let logincreds = new UserModel(this.userDetails);
                    logincreds.save().then((result) => {
                        console.log("result--->", result);
                        new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: signindao');
                        callback(result);

                    }).catch((error) => {
                        callback(error);
                    })
                }
            });

        })

    }

    public async logindao(logindetails, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: logindao');
        let response = await UserModel.findOneAndUpdate({ email: logindetails.email, password: crypto.createHash('md5').update(logindetails.password).digest('hex') }, { $set: { loggedinDate: new Date() }});
            // console.log("signinmodel",signinmodel);
        if (response === null) {
            response = 'Incorrect Username or Password';
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: logindao 1');
            callback(response);
        } else {
            console.log('response', response);
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: logindao 2');
            callback(response);

        }
    }

    public async logoutdao(userid, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: logoutdao');
        let result = await UserModel.findByIdAndUpdate({_id: userid}, { $set: { loggedoutDate: new Date() } }, {
            new: true,
            runValidators: true,
            context: 'query'
           });
        new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: logoutdao');
        callback(result);
    }

    public async googledao(googledata, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: googledao');

    }

    public getalluserdao(callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: getalluserdao');

        UserModel.find().populate({
            path: 'role', model: RoleModel
        }).then(result => {
            console.log("result--->", result);
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: getalluserdao');
            callback(result);

        }).catch((error => {
            callback(error);
        }))
    }

    public getbyiduserdao(userId, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: getbyiduserdao');

        UserModel.findById(userId).populate({
            path: 'role', model: RoleModel
        }).then(result => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: getbyiduserdao');
            callback(result);

        }).catch((error => {
            callback(error);
        }))
    }

    public getrolesdao(callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: getrolesdao');

        RoleModel.find().then(result => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: getrolesdao');
            callback(result);

        }).catch((error) => {
            callback(error);
        })
    }

    public saveroledao(roleData, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: saveroledao');

        let temp = new RoleModel(roleData);
        temp.save().then((result) => {
            new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: saveroledao');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public deleteroledao(roleId, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: deleteroledao');

        RoleModel.findByIdAndRemove(roleId).then((result) => {
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: deleteroledao');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public async updateuserdao(updateuser, callback) {

        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: updateuserdao');
        console.log("updateuser---->", updateuser);
        var payload = {
            username: updateuser.email,
            firstname: updateuser.firstname,
            lastname: updateuser.lastname,
            email: updateuser.email,
            role: updateuser.role,
            id: updateuser.id,
            image: updateuser.image,


        }
        console.log("payload", payload);
        await RoleModel.find().then(result => {
            console.log("result--->", result);
            asyncLoop(result, (roles, next) => {
                console.log("sss--->", updateuser.role, roles.role);
                console.log("roles.role-->", roles.role === updateuser.role);
                if (roles.role === updateuser.role) {
                    console.log("roles.role-->", roles.role === updateuser.role);
                    console.log(roles._id);
                    this.data = roles._id;
                    console.log("this.data--->", this.data);
                } next();
            }, (err) => {
                if (err) {
                    return err;
                }
            })


            var idtoken = jwt.sign(payload, 'geppettosecret', {
                expiresIn: 86400
            });

            UserModel.findByIdAndUpdate(updateuser.id, { $set: { username: updateuser.username, firstname: updateuser.firstname, lastname: updateuser.lastname, email: updateuser.email, role: this.data, Idtoken: null } }, (err, response) => {
                console.log("role-->", this.data)
                if (err) {
                    callback(err);
                }
                var updaterespone = {
                    username: updateuser.email,
                    firstname: updateuser.firstname,
                    lastname: updateuser.lastname,
                    email: updateuser.email,
                    id: updateuser.id,
                    role: this.data,
                    image: updateuser.image,
                    idtoken: idtoken
                }
                console.log("updateresponse", response);
                new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: updateuserdao');
                callback(updaterespone);
            });
        })
    }
    public deleteuserdao(userdetails, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: deleteuserdao');
        UserModel.findByIdAndRemove(userdetails).then(result => {
            console.log('result--->', result);
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: deleteuserdao');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public updateUserdao(updateuser, callback) {
        new CustomLogger().showLogger('info', 'Enter into SigninDao.ts: updateuserdao');
        UserModel.findByIdAndUpdate(updateuser.id, { $set: { avatar: updateuser.avatar } }, { multi: true }, (err, response) => {
            if (err) {
                callback(err);
            }
            new CustomLogger().showLogger('info', 'Exit from SigninDao.ts: updateuserdao');
            callback(response);

        })
    }


}
