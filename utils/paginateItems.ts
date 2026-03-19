export function paginateItems<T>(items: T[], pageSize: number): T[][] {
    if (pageSize <= 0) return [];

    const pages: T[][] = [];
    for (let i = 0; i < items.length; i += pageSize) {
        pages.push(items.slice(i, i + pageSize));
    }

    return pages;
}