type ClsxParams = [string, boolean | undefined][];

export const clsx = (params: ClsxParams) =>
  params
    .map(([className, condition]) =>
      condition === undefined || condition ? className : ""
    )
    .join(" ");
