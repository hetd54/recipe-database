// app/routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes"

export default [
  // Root layout with navigation
  layout("routes/layout.tsx", [
    // Home page
    index("routes/home.tsx"),
    //
    // // Recipe routes
    // route("recipes", "routes/recipes/layout.tsx", [
    //   // List all recipes
    //   index("routes/recipes/index.tsx"),
    //
    //   // Create new recipe
    //   route("new", "routes/recipes/new.tsx"),
    //
    //   // View single recipe
    //   route(":recipeId", "routes/recipes/recipe.tsx"),
    //
    //   // Edit recipe
    //   route(":recipeId/edit", "routes/recipes/edit.tsx"),
    // ]),
    //
    // // Categories routes
    // route("categories", "routes/categories/layout.tsx", [
    //   // List all categories
    //   index("routes/categories/index.tsx"),
    //
    //   // Create new category
    //   route("new", "routes/categories/new.tsx"),
    //
    //   // View recipes in category
    //   route(":categoryId", "routes/categories/category.tsx"),
    // ]),
    //
    // // Search functionality
    // route("search", "routes/search.tsx"),
    //
    // // Favorites
    // route("favorites", "routes/favorites.tsx"),
    //
    // // User profile/settings
    // route("profile", "routes/profile.tsx"),
  ]),
] satisfies RouteConfig
