import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { FundamentalCreate } from '../dto/fundamentcreate.dto';
import { Fundamentalupdate } from '../dto/fundamentupdate.dto';
import { Fundamental } from '../model/fundamenta.dto';

const mock: Fundamental[] = [
  {
    id: 1,
    key: 'string',
    title: 'string',
    description: 'string',
  },
  {
    id: 2,
    key: 'string',
    title: 'string',
    description: 'string',
  },
  {
    id: 3,
    key: 'string',
    title: 'string',
    description: 'string',
  },
];

@Injectable()
export class FundamentalService {
  constructor() {}

  getFundamentals(): Fundamental[] {
    return mock;
  }

  getFundamental(id: number): Fundamental {
    return mock.find((fundamental) => fundamental.id === id);
  }

  createFundamental(fundamental: FundamentalCreate): Fundamental {
    let idNew: number = -1;

    mock.forEach((fundamental) => {
      if (idNew <= fundamental.id) {
        idNew = fundamental.id + 1;
      }
    });

    mock.push(convertDtoToModel(idNew, fundamental));
    return mock.find((fundamental) => fundamental.id === idNew);
  }

  updateFundamental(
    id: number,
    updatedFundamental: Fundamentalupdate,
  ): Fundamental {
    let index = mock.findIndex((fundamental) => fundamental.id == id);
    mock[index].title = updatedFundamental.title;
    mock[index].description = updatedFundamental.description;

    return mock.find((fundamental) => fundamental.id === id);
  }

  deleteFundamental(id: number): void {
    let index = mock.findIndex((fundamental) => fundamental.id == id);
    if (index >= 0) {
      mock.splice(index, 1);
    }
  }
}
function convertDtoToModel(
  idNew: number,
  fundamental: FundamentalCreate,
): Fundamental {
  return {
    id: idNew,
    title: fundamental.title,
    description: fundamental.description,
  } as Fundamental;
}
