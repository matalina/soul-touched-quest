import type { ProfessionLevel, Skill, SkillList } from "./types";

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

/*
* Profession with a Doctorate: Wealth: +4, Min Age 26
* Profession with a Masters: Wealth: +3, Min Age 24
* Profession with a Bachelors: Wealth: +2, Min Age 22
* Profession with an Associates Degree: Wealth: +1, Min Age 20
* Blue Collar/White Collar Labor: Wealth: +0
* Student: Wealth: -1
* Unemployed: Wealth: -2
* Criminal: Wealth: +2, Morality: start at -1
* Venatori Hunter: Wealth: +1, Morality start at 0
*/

export const Doctorate: ProfessionLevel = {
  name: 'Doctorate',
  description: 'a PHD in a given field',
  wealth: { type: 'change', value: 4 },
  minAge: 36
}

export const Masters: ProfessionLevel = {
  name: 'Masters',
  description: 'a Masters in a given field',
  wealth: { type: 'change', value: 3 },
  minAge: 24
}

export const Bachelors: ProfessionLevel = {
  name: 'Bachelors',
  description: 'a BS degree in a given field',
  wealth: { type: 'change', value: 2 },
  minAge: 2
}

export const Associate: ProfessionLevel = {
  name: 'Doctorate',
  description: 'a associates in a given field',
  wealth: { type: 'change', value: 1 },
  minAge: 20
}

export const BlueWhiteCollar: ProfessionLevel = {
  name: 'Blue/White Collar',
  description: 'a regular working person',
  wealth: { type: 'change', value: 0 },
}

export const Student: ProfessionLevel = {
  name: 'Student',
  description: 'still in highschool or university',
  wealth: { type: 'change', value: -1 },
}

export const Unemployed: ProfessionLevel = {
  name: 'Unemployed',
  description: 'someone without a job',
  wealth: { type: 'change', value: -2 },
}

export const Criminal: ProfessionLevel = {
  name: 'Criminal',
  description: 'someone who makes a living on the other side of the law',
  wealth: { type: 'change', value: 2 },
  morality: { type: 'start', value: -1}
}

export const professionLevels = [
  Doctorate,
  Masters,
  Bachelors,
  Associate,
  BlueWhiteCollar,
  Student,
  Unemployed,
  Criminal,
];