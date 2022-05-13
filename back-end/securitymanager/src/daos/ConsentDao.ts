import mongoose = require('mongoose');
import UserModel from '../models/User';
import RoleModel from '../models/Role';
import * as jwt from 'jsonwebtoken';
import { CustomLogger } from '../config/Logger'

export class ConsentDao {
    public consentdao(consentdata, callback) {
        new CustomLogger().showLogger('info', 'Enter into ConsentDao.ts : consentdao');

        if (consentdata.scope === 'openid' && consentdata.submit === 'Allow access') {
            UserModel.findById(consentdata.id).populate({
                path: 'role', model: RoleModel
            }).then((result) => {
                var payload = {
                    username: result.username,
                    firstname: result.firstname,
                    lastname: result.lastname,
                    email: result.email,
                    id: result._id,
                    role: result.role.role
                }
                var token = jwt.sign(payload, 'geppettosecret', {
                    expiresIn: 86400
                });
                UserModel.findByIdAndUpdate(consentdata.id, { $set: { Idtoken: token } }).then((err: any, response: any) => {
                    if (err) {
                        callback(err);
                    }
                    response.Idtoken = token;
                    new CustomLogger().showLogger('info', 'Exit from ConsentDao.ts : consentdao');
                    callback(response);
                });
            })
        }
    }

}