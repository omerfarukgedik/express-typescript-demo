import { createConnection } from 'typeorm';
import { Feed } from '../src/entity/Feed';
import * as faker from 'faker'

createConnection().then(async connection => {
  const feedRepository = await connection.getMongoRepository(Feed);

  for (let i = 0; i < 600; i++) {
    await feedRepository.save({
      title: faker.lorem.words(3),
      text: faker.lorem.words(2),
      type: faker.lorem.words(1),
      images: [
        {
          itemType: faker.datatype.string(),
          itemId: faker.datatype.uuid(),
          imageSize: faker.datatype.string(10),
          base64: faker.image.food(),
          storeId: faker.datatype.uuid()
        },
        {
          itemType: faker.datatype.string(),
          itemId: faker.datatype.uuid(),
          imageSize: faker.datatype.string(10),
          base64: faker.image.food(),
          storeId: faker.datatype.uuid()
        }
      ],
      location: {
        type: faker.datatype.string(),
        coordinates: [faker.datatype.number(), faker.datatype.number()]
      },
      isDinner: faker.datatype.boolean(),
      isDelivery: faker.datatype.boolean(),
      storeInfo: {
        geoLocation: {
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        userPoint: faker.datatype.number(100),
        workingHours: {
          day: faker.datatype.number(),
          open: faker.datatype.float(),
          close: faker.datatype.float(),
          closed: faker.datatype.boolean(),
        },
        status: faker.datatype.string(5),
        rate: faker.datatype.float(5),
        minOrderPrice: faker.datatype.float()
      },
      categoryId: faker.datatype.uuid(),
    });
  }

  process.exit();
})