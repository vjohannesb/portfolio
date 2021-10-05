/// <reference types="react-scripts" />

declare module "projects.json" {
    export const projects: Project[];
}

type Project = {
    title: string;
    description: string;
    languages: string[];
    frameworks?: string[];
    github?: string;
    external?: string;
};
