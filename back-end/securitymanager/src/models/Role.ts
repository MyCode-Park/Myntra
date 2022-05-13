import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

const Schema = mongoose.Schema;

export const Roleschema = new Schema ({

    _id: {
        type: String,
        default:uuid.v1
    },
    role: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

const RoleModel = mongoose.model('Role', Roleschema, 'Role');
export default RoleModel;