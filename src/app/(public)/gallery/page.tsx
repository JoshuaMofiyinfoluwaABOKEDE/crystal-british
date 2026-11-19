import { school } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { galleryAlbums } from "@/content/news";
import { PageHeader } from "@/components/shared/PageHeader";
import { Gallery } from "@/components/sections/Gallery";

export const metadata = pageMetadata({
  title: "Gallery",
  description: `Photographs of the campus, classrooms and special days at ${school.name}, Abakaliki.`,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        intro="Our campus, our classrooms and the special days that make up school life at Crystal."
        crumbs={[{ label: "Student Life", href: "/student-life" }]}
      />
      <section className="container-site section-pad">
        <Gallery albums={galleryAlbums} />
      </section>
    </>
  );
}
