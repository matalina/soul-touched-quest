import type { Skill, SkillList } from "./types";

export const PhysicalSkill: Skill = {
  name: 'physical',
  description: '',
  skills: [],
};

export const MentalSkill: Skill = {
  name: 'mental',
  description: '',
  skills: [],
};

export const SocialSkill: Skill = {
  name: 'social',
  description: '',
  skills: [],
};

export const OccultSkill: Skill = {
  name: 'physical',
  description: '',
  skills: [],
};

export const mainSkills = {
  physical: PhysicalSkill,
  mental: MentalSkill,
  social: SocialSkill,
  occult: OccultSkill,
} as SkillList