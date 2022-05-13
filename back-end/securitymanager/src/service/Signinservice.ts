import { Request, response } from 'express';
import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import * as crypto from 'crypto';
import { SigninDao } from '../daos/SigninDao';
import { CustomLogger } from '../config/Logger';

let signindao = new SigninDao();
let email;
let otp;

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: 'bjayaprakashcse@gmail.com',
        pass: 'zgtjlhamlqvjrlfj',
    }

}));

export class Signinservice {

    public signupservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: signupservice');
        const users = req.body;
        signindao.signindao(users, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
            callback(response);

        });
    }

    public sendOTPservice(req: Request, callback) {
        email = req.body.email;
        otp = Math.random();
        otp = otp * 1000000;
        otp = parseInt(`${otp}`);
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: signupservice');
        let mailOPtions = {
            to: email,
            subject: 'Otp for registration is: ',
            html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>"
        }
        transporter.sendMail(mailOPtions, (error, info) => {
            if (error) {
                console.log('error ', error);
            }
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
            callback(info);
        })

    }

    public reSendOTPservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: signupservice');
        otp = Math.random();
        otp = otp * 1000000;
        otp = parseInt(`${otp}`);
        let mailOPtions = {
            to: email,
            subject: 'Otp for registration is: ',
            html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>"
        }
        transporter.sendMail(mailOPtions, (error, info) => {
            if (error) {
                new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
                callback(error);
            } else {
                new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
                callback(info);
            }
        })

    }

    public verifyOTPservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: signupservice');
        console.log('otp', otp, 'req.body.otp', req.body.otp);
        if (parseInt(req.body.otp) === otp) {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
            callback('successfull');
        } else {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
            callback('not matched');
        }

    }

    public hashing(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: signupservice');
        const password = req.body.name;
        var hash = crypto.createHash('md5').update(password).digest('hex');
        new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: signupservice');
        callback(hash);

    }

    public loginservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into loginservice');
        const logindetails = req.body;
        signindao.logindao(logindetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: loginservice');
            callback(response)

        });
    }

    public logoutservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: logoutservice');

        const user = req.body._id;
        signindao.logoutdao(user, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: logoutservice');
            callback(response);

        })
    }

    public googleservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: googleservice');

        const googledata = req.body;
        signindao.googledao(googledata, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: googleservice');
            callback(response);

        })
    }

    public getalluserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: getalluserservice');

        signindao.getalluserdao((response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: getalluserservice');
            callback(response);

        })
    }

    public getbyiduserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: getbyiduserservice');

        const userId = req.params.id;
        signindao.getbyiduserdao(userId, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: getbyiduserservice');
            callback(response);

        })
    }

    public getrolesservice(req: Request, callback) {

        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: getrolesservice');

        signindao.getrolesdao((response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: getrolesservice');
            callback(response);

        })
    }


    public saveroleservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: saveroleservice');
        let roleDetails = req.body;
        signindao.saveroledao(roleDetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: saveroleservice');
            callback(response);

        })
    }

    public deleteroleservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: deleteroleservice');
        const roleId = req.params.id;
        signindao.deleteroledao(roleId, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: deleteroleservice');
            callback(response);

        })
    }

    public updateuserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: updateuserservice');

        const userdetails = req.body;

        signindao.updateuserdao(userdetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: updateuserservice');
            callback(response);

        })
    }

    public updateUserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: updateuserservice');

        const userdetails = req.body;

        signindao.updateUserdao(userdetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: updateuserservice');
            callback(response);

        })
    }

    public deleteuserservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into Signinservice.ts: deleteuserservice');
        const userDetails = req.params.id;
        signindao.deleteuserdao(userDetails, (response) => {
            new CustomLogger().showLogger('info', 'Exit from Signinservice.ts: deleteuserservice');
            callback(response);
        })
    }
}