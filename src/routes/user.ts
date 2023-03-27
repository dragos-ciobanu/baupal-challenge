import { Router, Request, Response } from 'express';
import { UserRepository } from '../database/repository/user.repository';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
  const users = await UserRepository.find();

  res.json(users);
});

router.post('/users', async (req: Request, res: Response) => {
  try {
    const newUser = UserRepository.create(req.body);
    const savedUser = await UserRepository.save(newUser);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.get('/users/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.findOneBy({
    id: req.params.id,
  });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.json(user);
});

router.delete('/users/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.findOneBy({
    id: req.params.id,
  });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  await UserRepository.delete(req.params.id);

  res.status(204).json({ message: 'User deleted' });
});

router.put('/users/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.findOneBy({
    id: req.params.id,
  });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  try {
    UserRepository.merge(user, req.body);
    const savedUser = await UserRepository.save(user);

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

export default router;
