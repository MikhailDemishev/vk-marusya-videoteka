import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import { useUserProfile } from "../../features/auth/hooks/useProfile";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { profileTabs } from "./profileTabs";
import { Tabs } from "../../components/UI/Tabs/Tabs";
import { useActiveProfileTab } from "./useActiveProfileTab";
import { ProfileSettings } from "../../components/entities/Profile/ProfileSettings";
import { useGetFavorites } from "../../features/favorites/hooks/useGetFavorites";
import { Grid } from "../../components/UI/Grid/Grid";
import { MovieCard } from "../../components/entities/Movie/MovieCard/MovieCard";


import "./ProfilePage.scss";
import { useDeleteFavorite } from "../../features/favorites/hooks/useDeleteFavorite";

export const ProfilePage = () => {
    const userProfile = useUserProfile();
    const favoritesList = useGetFavorites();
    const { activeTab, handleActiveTab } = useActiveProfileTab();
    const deleteHandle = useDeleteFavorite()
    return (
        <PageBoundary isLoading={userProfile.isPending} isError={userProfile.error}>
            <PageLayout pageName="profile">
                <SectionLayout
                    sectionName="profile"
                    title="Мой аккаунт"
                    headerSlot={
                        <Tabs
                            tabs={profileTabs}
                            activeTab={activeTab}
                            TabsClassName="profile"
                            onChange={handleActiveTab}>
                        </Tabs>
                    }>
                    {activeTab === 'profile' && (
                        <ProfileSettings profile={userProfile.data!}></ProfileSettings>
                    )}

                    {activeTab === 'favorites' && (
                        <PageBoundary isLoading={favoritesList.isPending} isError={favoritesList.error}>
                            <Grid
                                items={favoritesList.data ?? []}
                                className="movie"
                                renderItem={(item) => (
                                    <MovieCard
                                        id={item.id}
                                        title={item.title}
                                        imageUrl={item.backdropUrl}
                                        showCloseButton
                                        onClick={() => deleteHandle.mutate(item.id)}

                                    />
                                )}                        >
                            </Grid>
                        </PageBoundary>
                    )}
                </SectionLayout>
            </PageLayout>
        </PageBoundary>
    )
}
