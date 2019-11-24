export const PAGE='PAGE';

export function pageChange(page){

    const action={
        type:PAGE,
        payload:page
    }
    return action;
}