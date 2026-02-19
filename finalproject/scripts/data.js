export async function getSkaters() {
  try {
    const response = await fetch("data/skaters.json");

    if (!response.ok) {
      throw new Error("Failed to fetch skaters.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

