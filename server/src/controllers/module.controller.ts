import { Request, Response } from 'express';

import { Module } from '../models/module.model';

const getModules = async (req: Request, res: Response) => {
  try {
    const modules = await Module.find();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneModule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const module = await Module.findById(id);

    if (!module) {
      res.status(404).json({ message: 'Module not found!' });
    }

    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateModule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const module = await Module.findByIdAndUpdate(id, req.body, { new: true });

    if (!module) {
      res.status(404).json({ message: 'Module not found!' });
    }

    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteModule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const module = await Module.findByIdAndDelete(id);

    if (!module) {
      res.status(404).json({ message: 'Module not found!' });
    }

    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createModule = async (req: Request, res: Response) => {

  try {
    const modules = await Module.create(req.body);
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { 
  createModule, 
  getModules, 
  getOneModule, 
  updateModule, 
  deleteModule 
};