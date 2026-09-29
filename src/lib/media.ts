/** Indian architectural photography from Unsplash. Swap these URLs for the practice archive. */
export function photo(id: string, width = 1800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`
}
