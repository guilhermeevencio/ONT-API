import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class OntInfoModel extends Model {
  declare sn: number;
  declare slot: string;
  declare port: string;
  declare ontId: string;
  declare state: string;
  declare manufacturer: string;
}

OntInfoModel.init({
  sn: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  slot: {
    type: STRING,
    allowNull: false,
  },
  port: {
    type: STRING,
    allowNull: false,
  },
  ontId: {
    type: STRING,
    allowNull: false,
    field: 'ont_id'
  },
  state: {
    type: STRING,
    allowNull: false,
  },
  manufacturer: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'ontInfo',
  timestamps: false,
  freezeTableName: true
});

export default OntInfoModel;