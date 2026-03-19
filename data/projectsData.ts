export type ProjectItem = {
    title: string;
    desc: string;
    tech: string[];
    live: string;
    github: string;
    year: string;
};

export const projects: ProjectItem[] = [
    {
        title: "Siperuka Frontend - Campus Room Booking System",
        desc: "Frontend Web App for PraPDBL 2026 - Campus Room Booking System built with React and TypeScript using Material UI as an interface design framework.",
        tech: ["React", "TypeScript", "Material UI"],
        live: "#",
        github: "https://github.com/shintiaadwim/2026-siperuka-frontend",
        year: "2026",
    },
    {
        title: "Siperuka Backend - Campus Room Booking System",
        desc: "Backend Service for PraPDBL 2026 - Campus Room Booking System built with ASP.NET Core and Entity Framework, providing RESTful API endpoints for managing rooms, bookings, and user authentication.",
        tech: ["ASP.NET", "C#", "Entity Framework", "Ms SQL Server"],
        live: "#",
        github: "https://github.com/shintiaadwim/2026-siperuka-backend",
        year: "2026",
    },
    {
        title: "Book App Mobile",
        desc: "Mobile App for browsing and managing personal book library in mobile programming workshop course.",
        tech: ["Flutter", "Dart", "Android Studio"],
        live: "#",
        github: "#",
        year: "2026",
    },
    {
        title: "Laundry System",
        desc: "Web App for managing laundry business operations, including order processing, inventory management, and customer tracking in object-oriented programming course.",
        tech: ["Java", "NetBeans"],
        live: "#",
        github: "https://github.com/shintiaadwim/java-laundry-system",
        year: "2025",
    },
    {
        title: "Simple Financial Management Web App",
        desc: "Web App for managing personal finances, including budgeting, expense tracking, and financial reporting.",
        tech: ["PHP", "Laravel-11", "Filament", "Tailwind CSS", "MySQL"],
        live: "#",
        github: "https://github.com/shintiaadwim/laravel11-simple-financial-management-website",
        year: "2025",
    },
    {
        title: "Employee Management System Crud App",
        desc: "Web App for managing employee information and operations.",
        tech: ["PHP", "Laravel-10", "AdminLTE", "MySQL"],
        live: "#",
        github: "https://github.com/shintiaadwim/laravel10-crud-employees",
        year: "2024",
    },
];