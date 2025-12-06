import { Routes, Route } from "react-router-dom"
import { MainLayout } from "../../components/layout/MainLayout/MainLayout"
import { GenrePage } from "../../pages/GenrePage/GenrePage"
import { GenresPage } from "../../pages/GenresPage/GenresPage"
import { HomePage } from "../../pages/HomePage/HomePage"
import { MoviePage } from "../../pages/MoviePage/MoviePage"
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage"
import { ProtectedRoute } from "./ProtectedRoute"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="genres" element={<GenresPage />} />
                <Route path="genres/:genre" element={<GenrePage />} />
                <Route path="movie/:id" element={<MoviePage />} />
                <Route
                    path="profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
            </Route>
        </Routes>
    )
}
