import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class OntInfo extends Model {
  declare sn: number;
  declare slot: string;
  declare port: string;
  declare ontId: string;
  declare state: string;
  declare manufacturer: string;
}

OntInfo.init({
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
  modelName: 'ont-info',
  timestamps: false,
});

export default OntInfo;