export default async function fetcher(...args: Parameters<typeof fetch>) {
  const [url, opts] = args;
  const res = await fetch(url as RequestInfo, { ...(opts as RequestInit), credentials: 'include' });
  if (!res.ok) {
    const err = new Error('An error occurred while fetching the data.');
    (err as any).status = res.status;
    throw err;
  }
  return res.json();
}
