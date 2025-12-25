import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

interface Document {
  id: number;
  title: string;
  category: string;
  year: string;
}

const documents: Document[] = [
  // Microsurgery
  {
    id: 1,
    title: "Perforator Flap Techniques in Breast Reconstruction",
    category: "Microsurgery",
    year: "2023",
  },
  {
    id: 2,
    title: "DIEP Flap: Technical Considerations and Outcomes",
    category: "Microsurgery",
    year: "2022",
  },
  {
    id: 3,
    title: "Advances in Free Flap Monitoring",
    category: "Microsurgery",
    year: "2022",
  },
  {
    id: 4,
    title: "Supermicrosurgery Applications in Lymphedema Treatment",
    category: "Microsurgery",
    year: "2021",
  },

  // Breast Reconstruction
  {
    id: 5,
    title: "Immediate vs Delayed Breast Reconstruction: A Comparative Analysis",
    category: "Breast Reconstruction",
    year: "2023",
  },
  {
    id: 6,
    title: "Prepectoral Implant Reconstruction Techniques",
    category: "Breast Reconstruction",
    year: "2023",
  },
  {
    id: 7,
    title: "Autologous Tissue Reconstruction: Patient Selection Criteria",
    category: "Breast Reconstruction",
    year: "2022",
  },
  {
    id: 8,
    title: "Nipple-Sparing Mastectomy and Reconstruction Outcomes",
    category: "Breast Reconstruction",
    year: "2021",
  },
  {
    id: 9,
    title: "Hybrid Approaches in Breast Reconstruction",
    category: "Breast Reconstruction",
    year: "2020",
  },

  // Oncology
  {
    id: 10,
    title: "Mohs Micrographic Surgery: Reconstruction Techniques",
    category: "Oncology",
    year: "2023",
  },
  {
    id: 11,
    title: "Facial Skin Cancer: Aesthetic Reconstruction Principles",
    category: "Oncology",
    year: "2022",
  },
  {
    id: 12,
    title: "Melanoma Excision and Reconstruction Guidelines",
    category: "Oncology",
    year: "2022",
  },
  {
    id: 13,
    title: "Scalp Reconstruction After Oncologic Resection",
    category: "Oncology",
    year: "2021",
  },

  // Trauma
  {
    id: 14,
    title: "Complex Wound Management in Trauma Settings",
    category: "Trauma",
    year: "2023",
  },
  {
    id: 15,
    title: "Facial Trauma: Principles of Soft Tissue Repair",
    category: "Trauma",
    year: "2022",
  },
  {
    id: 16,
    title: "Lower Extremity Reconstruction After Trauma",
    category: "Trauma",
    year: "2021",
  },
  {
    id: 17,
    title: "Pediatric Trauma Reconstruction Considerations",
    category: "Trauma",
    year: "2020",
  },

  // Hand Surgery
  {
    id: 18,
    title: "Flexor Tendon Repair: Current Protocols",
    category: "Hand Surgery",
    year: "2023",
  },
  {
    id: 19,
    title: "Digital Replantation: Indications and Techniques",
    category: "Hand Surgery",
    year: "2022",
  },
  {
    id: 20,
    title: "Nerve Repair and Grafting in Hand Injuries",
    category: "Hand Surgery",
    year: "2021",
  },
];

const categories = [
  "All",
  "Microsurgery",
  "Breast Reconstruction",
  "Oncology",
  "Trauma",
  "Hand Surgery",
];

export default function ClinicalExpertisePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>
          Clinical Expertise & Case Studies | Reconstructive Surgery Specialists
        </title>
        <meta
          name="description"
          content="Explore clinical research, case studies, and educational resources from our board-certified plastic surgeons."
        />
      </Helmet>

      <Header />

      <main className="pt-20 lg:pt-24 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Clinical Expertise
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Clinical Expertise & Case Studies
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore selected clinical work, techniques, and educational
                resources reflecting our surgeons' experience and contributions
                to the field of plastic and reconstructive surgery.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Documents */}
        <section className="py-12 lg:py-16">
          <div className="container">
            {/* Search & Filters */}
            <div className="flex flex-col lg:flex-row gap-6 mb-10">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Count */}
            <p className="text-muted-foreground text-sm mb-6">
              Showing {filteredDocuments.length} of {documents.length} documents
            </p>

            {/* Documents Grid */}
            <div className="grid gap-4">
              {filteredDocuments.map((doc, index) => (
                <article
                  key={doc.id}
                  className="bg-card rounded-xl p-5 lg:p-6 shadow-card hover:shadow-medium transition-all duration-300 border border-transparent hover:border-primary/20 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-medical-teal-light text-primary text-xs font-medium rounded-full">
                          {doc.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {doc.year}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {doc.title}
                      </h3>
                    </div>

                    {/* Download Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-shrink-0"
                      asChild
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(
                            "PDF download functionality would be implemented here. This is a placeholder for the actual document."
                          );
                        }}
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredDocuments.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  No documents found
                </p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
