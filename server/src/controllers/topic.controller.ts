import { Request, Response } from 'express';

import { Module } from '../models/module.model';

const getOneTopic = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const module = await Module.findOne({
      topics: { $elemMatch: { _id: id } },
    });

    if (!module) {
      res.status(404).json({ message: 'Module not found!' });
    }

    const topic = module?.topics.find((topic) => topic.id === id);

    if (!topic) {
      res.status(404).json({ message: 'Topic not found!' });
    }

    res.status(200).json(topic);
  } catch (error) {
    console.error("Error in getOneTopic:", error);
    res.status(500).json({ message: error.message });
  }
};


export { getOneTopic };