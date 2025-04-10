export interface Project {
    name: string;
    description: string;
    startDate: string;
    status?: 'In Progress' | 'Completed';
}
