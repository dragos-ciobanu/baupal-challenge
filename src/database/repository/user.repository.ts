import { newsletterDataSource } from '../sources/newsletter-data-source.ts';
import { User } from '../entity/user.entity.ts';

export const UserRepository = newsletterDataSource.getRepository(User);
