export const extractDetailsFromMetadata = (metadata: string) => {
  const dateIndex = metadata.indexOf("Added on") + "Added on".length;
  const date = metadata.substring(dateIndex).trim();
  return { date };
};
