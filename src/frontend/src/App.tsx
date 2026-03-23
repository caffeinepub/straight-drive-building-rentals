import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  BedDouble,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const PROPERTY = {
  name: "Residency",
  company: "Straight Drive",
  address:
    "Telecom Layout, 6th Cross, Dr SRK Post, Aswath Nagar, Thanisandra, Bangalore - 560077",
  addressShort: "Telecom Layout, Thanisandra, Bangalore",
  floors: 4,
  type: "2BHK",
  availableFrom: "April 15, 2026",
  contact: "Mani Kandan",
  phone: "9741083679",
  mapQuery:
    "Telecom+Layout+6th+Cross+Aswath+Nagar+Thanisandra+Bangalore+560077",
};

const highlights = [
  {
    icon: Layers,
    title: "4 Floors",
    desc: "Spacious multi-storey building with modern construction",
    filled: true,
  },
  {
    icon: BedDouble,
    title: "2BHK Units",
    desc: "Well-planned 2-bedroom apartments with premium fittings",
    filled: false,
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Telecom Layout, Thanisandra — well connected to the city",
    filled: false,
  },
  {
    icon: Calendar,
    title: "Ready April 2026",
    desc: "Move-in ready from April 15, 2026 — brand new building",
    filled: false,
  },
];

const constructionQualities = [
  {
    icon: Sparkles,
    title: "Premium Quality Materials",
    desc: "Built with top-grade cement, steel, and finishes sourced from trusted suppliers — ensuring strength and elegance that lasts for decades.",
    accent: "gold",
  },
  {
    icon: Timer,
    title: "2 Years of Construction",
    desc: "Carefully crafted over two full years, with no shortcuts taken. Every floor, wall, and fixture was given the time it deserved.",
    accent: "teal",
  },
  {
    icon: ShieldCheck,
    title: "Superior Finishing & Safety",
    desc: "Excellent interior finishing throughout, with safety standards built into every structural detail — giving residents lasting peace of mind.",
    accent: "gold",
  },
];

const specs = [
  { label: "Building Name", value: "Residency" },
  { label: "Total Floors", value: "4 Floors" },
  { label: "Apartment Type", value: "2BHK (2 Bedrooms + Hall + Kitchen)" },
  { label: "Available From", value: "April 15, 2026" },
  { label: "Building Status", value: "Brand New Construction" },
  { label: "Location", value: "Telecom Layout, 6th Cross" },
  { label: "Post", value: "Dr SRK Post, Aswath Nagar" },
  { label: "Area", value: "Thanisandra, Bangalore - 560077" },
];

const galleryImages = [
  {
    src: "/assets/IMG-20260323-WA0003.jpg",
    alt: "Building view",
  },
  {
    src: "/assets/IMG-20260323-WA0006.jpg",
    alt: "Building exterior",
  },
  {
    src: "/assets/IMG-20260323-WA0007.jpg",
    alt: "Building interior",
  },
  {
    src: "/assets/IMG-20260323-WA0008.jpg",
    alt: "Apartment view",
  },
  {
    src: "/assets/IMG-20260323-WA0009.jpg",
    alt: "Room view",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    moveIn: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const inquiryRef = useRef<HTMLElement>(null);

  const scrollToInquiry = () => {
    inquiryRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { label: "Overview", href: "#highlights" },
    { label: "Details", href: "#details" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-bg font-body">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-navy flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-teal transition-colors"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button
              onClick={scrollToInquiry}
              className="bg-gold text-accent-foreground hover:bg-gold/90 font-semibold px-5"
              data-ocid="header.inquire_now.button"
            >
              Inquire Now
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded text-navy"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.menu.toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-border"
            >
              <nav className="flex flex-col px-4 py-3 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-sm font-medium text-foreground hover:text-teal transition-colors"
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  onClick={scrollToInquiry}
                  className="mt-2 bg-gold text-accent-foreground hover:bg-gold/90 font-semibold"
                  data-ocid="nav.mobile.inquire.button"
                >
                  Inquire Now
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[580px] md:min-h-[680px] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/IMG-20260323-WA0003.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/40 font-medium">
              New Listing · Brand New Building
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              New 2BHK Apartments
              <br />
              <span className="text-gold">For Rent</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-3 font-medium">
              Telecom Layout, Thanisandra, Bangalore
            </p>
            <div className="flex items-center gap-2 text-white/70 mb-8">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-sm">
                Available from:{" "}
                <strong className="text-white">April 15, 2026</strong>
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={scrollToInquiry}
                className="bg-gold text-accent-foreground hover:bg-gold/90 font-semibold text-base px-7 py-3 h-auto"
                data-ocid="hero.inquire.primary_button"
              >
                Book a Visit
              </Button>
              <a href="#details">
                <Button
                  variant="outline"
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold text-base px-7 py-3 h-auto"
                  data-ocid="hero.view_details.secondary_button"
                >
                  View Details
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUILDING HIGHLIGHTS */}
      <section id="highlights" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
              Building Highlights
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Everything you need in a modern, well-connected home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl p-6 flex flex-col gap-4 shadow-card ${
                  item.filled
                    ? "bg-navy text-white"
                    : "bg-white border border-border hover:border-teal transition-colors"
                }`}
                data-ocid={`highlights.item.${i + 1}`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.filled ? "bg-white/15" : "bg-teal/10"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      item.filled ? "text-gold" : "text-teal"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-display font-bold text-xl mb-1 ${
                      item.filled ? "text-white" : "text-navy"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      item.filled ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTRUCTION QUALITY */}
      <section
        id="construction"
        className="py-16 md:py-20 bg-navy overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              About the Building
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Built to Last a Lifetime
            </h2>
          </motion.div>

          {/* Intro quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <p className="text-white/70 text-base leading-relaxed">
              This building is constructed with{" "}
              <span className="text-gold font-semibold">
                high-quality materials and excellent finishing
              </span>
              . The overall construction took{" "}
              <span className="text-white font-semibold">2 years</span>,
              ensuring long-lasting durability and safety for all residents.
            </p>
          </motion.div>

          <Separator className="bg-white/10 mb-12" />

          {/* 3 quality cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {constructionQualities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 flex flex-col gap-5 hover:border-gold/40 hover:bg-white/8 transition-all duration-300"
                data-ocid={`construction.item.${i + 1}`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${
                    item.accent === "gold" ? "bg-gold" : "bg-teal"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.accent === "gold"
                      ? "bg-gold/15 ring-1 ring-gold/30"
                      : "bg-teal/15 ring-1 ring-teal/30"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      item.accent === "gold" ? "text-gold" : "text-teal"
                    }`}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Badge */}
                <div className="mt-auto">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                      item.accent === "gold"
                        ? "bg-gold/15 text-gold"
                        : "bg-teal/15 text-teal"
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Quality
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY DETAILS */}
      <section id="details" className="py-16 md:py-20 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
              Property Details & 2BHK Apartments
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Residency — premium new construction in Thanisandra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Specs */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-card p-8"
              data-ocid="details.specs.card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <h3 className="font-display font-bold text-xl text-navy">
                  Property Specifications
                </h3>
              </div>
              <dl className="space-y-4">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <dt className="text-sm font-semibold text-muted-foreground min-w-[140px]">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 p-4 bg-teal/8 rounded-lg border border-teal/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">
                      Ready to Move In
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tenants can begin occupancy from{" "}
                      <strong className="text-teal">April 15, 2026</strong>.
                      Contact us early to secure your unit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Building photo + features */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
              data-ocid="details.floorplan.panel"
            >
              <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                <img
                  src="/assets/IMG-20260323-WA0009.jpg"
                  alt="Building view"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h4 className="font-display font-bold text-lg text-navy mb-1">
                    Residency
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Spacious layout with 2 bedrooms, living room, kitchen, and 2
                    bathrooms.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-6">
                <h4 className="font-display font-bold text-lg text-navy mb-4">
                  Included Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "New Construction",
                    "Modern Fittings",
                    "24/7 Water Supply",
                    "Covered Parking",
                    "24/7 Security",
                    "Power Backup",
                    "Lift",
                    "Balcony",
                  ].map((feat) => (
                    <Badge
                      key={feat}
                      variant="secondary"
                      className="bg-teal/10 text-teal border border-teal/20 font-medium"
                    >
                      {feat}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section id="gallery" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
              Photo Gallery
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Real photos of Residency
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]"
            data-ocid="gallery.list"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-xl overflow-hidden bg-gray-bg ${
                  i === 0
                    ? "col-span-2 row-span-2"
                    : i === 3
                      ? "col-span-2"
                      : ""
                }`}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section id="contact" className="py-16 md:py-20 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
              Location & Contact
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Conveniently located in Aswath Nagar, Thanisandra, Bangalore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-auto bg-navy/10"
              data-ocid="contact.map.panel"
            >
              <iframe
                title="Property Location"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=${PROPERTY.mapQuery}`}
                className="w-full h-full min-h-[320px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div
                className="bg-white rounded-2xl shadow-card p-8"
                data-ocid="contact.info.card"
              >
                <h3 className="font-display font-bold text-xl text-navy mb-6">
                  Contact Us
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Contact Person
                      </p>
                      <p className="font-semibold text-foreground text-lg">
                        {PROPERTY.contact}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {PROPERTY.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${PROPERTY.phone}`}
                        className="font-semibold text-lg text-teal hover:underline"
                        data-ocid="contact.phone.link"
                      >
                        +91 {PROPERTY.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Address
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {PROPERTY.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Available From
                      </p>
                      <p className="font-semibold text-foreground">
                        {PROPERTY.availableFrom}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    onClick={scrollToInquiry}
                    className="w-full bg-navy hover:bg-navy/90 text-white font-semibold"
                    data-ocid="contact.inquire.button"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Send an Inquiry
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section
        ref={inquiryRef}
        id="inquiry"
        className="py-16 md:py-20"
        style={{ background: "oklch(var(--teal))" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Inquiry & Booking
            </h2>
            <p className="text-white/80 text-base">
              Fill out this form and we'll get back to you shortly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-card p-8"
            data-ocid="inquiry.modal"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10"
                  data-ocid="inquiry.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy mb-2">
                    Inquiry Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for your interest. Mani Kandan will contact you at{" "}
                    <strong>+91 {PROPERTY.phone}</strong> shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        moveIn: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="border-teal text-teal hover:bg-teal/5"
                    data-ocid="inquiry.reset.button"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="inquiry.form.panel"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold text-navy">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, name: e.target.value }))
                        }
                        className="border-border focus:ring-teal"
                        data-ocid="inquiry.name.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="font-semibold text-navy"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, email: e.target.value }))
                        }
                        className="border-border focus:ring-teal"
                        data-ocid="inquiry.email.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="font-semibold text-navy"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="border-border focus:ring-teal"
                        data-ocid="inquiry.phone.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="moveIn"
                        className="font-semibold text-navy"
                      >
                        Preferred Move-in Date
                      </Label>
                      <Input
                        id="moveIn"
                        type="date"
                        min="2026-04-15"
                        value={formState.moveIn}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            moveIn: e.target.value,
                          }))
                        }
                        className="border-border focus:ring-teal"
                        data-ocid="inquiry.movein.input"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="font-semibold text-navy"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, preferred floor, any special requests..."
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, message: e.target.value }))
                      }
                      className="border-border focus:ring-teal resize-none"
                      data-ocid="inquiry.message.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gold text-accent-foreground hover:bg-gold/90 font-bold text-base py-3 h-auto"
                    data-ocid="inquiry.submit.submit_button"
                  >
                    Send Inquiry
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to be contacted by Straight Drive
                    regarding this property.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-white pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-gold flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-navy" />
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Quality residential properties in Bangalore. Find your perfect
                home with us.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-gold mb-4">
                Property
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Residency</li>
                <li>4 Floors · 2BHK Apartments</li>
                <li>Brand New Building</li>
                <li className="text-gold font-medium">
                  Available from April 15, 2026
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-gold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <User className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Mani Kandan · Straight Drive</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <a
                    href="tel:9741083679"
                    className="hover:text-white transition-colors"
                  >
                    +91 9741083679
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{PROPERTY.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Straight Drive. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 underline transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
