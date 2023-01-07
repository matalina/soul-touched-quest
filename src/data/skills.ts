import type { Skill, SkillList } from "./types";

export const PhysicalSkill: Skill = {
  name: 'physical',
  description: 'This is a generic physical action skill, this covers the basics of all physical interactions, lifting, carrying, fighting, climbing etc.',
  skills: [],
};

export const MentalSkill: Skill = {
  name: 'mental',
  description: 'This is a generic mental action skill, this covers the basics of general knowledge, perception, insight and various other mental abilities.',
  skills: [],
};

export const SocialSkill: Skill = {
  name: 'social',
  description: 'This is a generic social action skill set, this covers things like communication, intimidation, deception and other interactions between other beings.',
  skills: [],
};

export const skills = {
  physical: PhysicalSkill,
  mental: MentalSkill,
  social: SocialSkill,
} as SkillList