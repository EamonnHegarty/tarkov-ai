const createURL = (path: string) => {
  return window.location.origin + path;
};

export const getChatsForUser = async () => {
  const res = await fetch(
    new Request(createURL("/api/chat"), {
      method: "POST",
    })
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
