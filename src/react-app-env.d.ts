/// <reference types="react-scripts" />

declare module "projects.json" {
    export const projects: Project[];
}

type Project = {
    title: string;
    description: string;
    languages: string[];
    tech?: string[];
    github?: string;
    external?: string;
};

type Skill = {
    name: string;
    weight: number;
    extra?: { name: string }[];
};
