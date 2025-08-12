import { impactStoriesData } from "./impact-stories/index.js"
import { programUpdatesData } from "./program-updates/index.js"
import { communityNewsData } from "./community-news/index.js"
import { volunteerSpotlightsData } from "./volunteer-spotlights/index.js"

export const blogCategories = [
  {
    id: "impact-stories",
    name: "Impact Stories",
    description: "Real stories of transformation from the communities we serve",
    color: "#ffb70b",
  },
  {
    id: "program-updates",
    name: "Program Updates",
    description: "Latest news and developments from our programs worldwide",
    color: "#022741",
  },
  {
    id: "community-news",
    name: "Community News",
    description: "Updates from our global community of supporters and volunteers",
    color: "#ffb609",
  },
  {
    id: "volunteer-spotlights",
    name: "Volunteer Spotlights",
    description: "Celebrating the amazing people who make our work possible",
    color: "#011728",
  },
]

export const allBlogPosts = [
  ...impactStoriesData,
  ...programUpdatesData,
  ...communityNewsData,
  ...volunteerSpotlightsData,
].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))

export const getBlogPostsByCategory = (categoryId) => {
  const categoryMap = {
    "impact-stories": impactStoriesData,
    "program-updates": programUpdatesData,
    "community-news": communityNewsData,
    "volunteer-spotlights": volunteerSpotlightsData,
  }
  return categoryMap[categoryId] || []
}

export const getBlogPostBySlug = (slug) => {
  return allBlogPosts.find((post) => post.slug === slug)
}

export const getFeaturedPosts = (limit = 3) => {
  return allBlogPosts.slice(0, limit)
}
