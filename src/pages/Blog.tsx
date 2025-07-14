import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowRight, Heart, Lightbulb, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/web2.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Welcome to FLYBIT Dynamics: Where Wonder Begins",
    excerpt: "Discover the story behind India's premier drone light show company and our mission to transform celebrations into magical experiences.",
    content: "At FLYBIT Dynamics, we believe that every celebration deserves a touch of magic. Our journey began with a simple vision: to revolutionize how we celebrate life's most precious moments through cutting-edge drone technology...",
    category: "Company News",
    author: "Rajesh Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["company", "innovation", "technology"]
  },
  {
    id: 2,
    title: "Top 5 Drone Show Ideas for Weddings That Will Leave Guests Speechless",
    excerpt: "From romantic heart formations to personalized love stories in the sky, discover the most popular wedding drone show concepts.",
    content: "Your wedding day is one of the most important days of your life, and it deserves to be truly unforgettable. Here are five spectacular drone show ideas that will transform your special day into a magical experience...",
    category: "Wedding Ideas",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["wedding", "ideas", "romance"]
  },
  {
    id: 3,
    title: "Behind the Scenes: Creating a 500-Drone Spectacular",
    excerpt: "Take a deep dive into the technical complexity and creative process behind our largest drone light shows.",
    content: "Ever wondered what it takes to coordinate 500 drones in perfect synchronization? Join us behind the scenes as we reveal the intricate planning, cutting-edge technology, and artistic vision that goes into creating our most spectacular shows...",
    category: "Technology",
    author: "Dr. Amit Patel",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["technology", "behind-scenes", "innovation"]
  },
  {
    id: 4,
    title: "How Drone Shows Are Leading the Eco-Friendly Entertainment Revolution",
    excerpt: "Explore how drone light shows offer a sustainable alternative to traditional fireworks while delivering even more spectacular results.",
    content: "In an era where environmental consciousness is paramount, drone light shows emerge as the perfect solution for spectacular entertainment without environmental impact...",
    category: "Sustainability",
    author: "Environmental Team",
    date: "2023-12-28",
    readTime: "6 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["environment", "sustainability", "innovation"]
  },
  {
    id: 5,
    title: "Corporate Branding in the Sky: How to Make Your Brand Unforgettable",
    excerpt: "Learn how leading companies are using drone light shows to create powerful brand experiences that resonate with audiences.",
    content: "Corporate events have evolved beyond traditional presentations and networking. Today's successful companies are taking their brand stories to new heights—literally...",
    category: "Corporate",
    author: "Marketing Team",
    date: "2023-12-20",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["corporate", "branding", "marketing"]
  },
  {
    id: 6,
    title: "The Science of Synchronization: How We Achieve Perfect Aerial Choreography",
    excerpt: "Dive into the technical aspects of drone coordination, GPS precision, and the algorithms that make magical performances possible.",
    content: "Creating a perfectly synchronized drone light show is part art, part science, and completely magical. The technical precision required to coordinate hundreds of drones...",
    category: "Technology",
    author: "Technical Team",
    date: "2023-12-15",
    readTime: "12 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["technology", "science", "precision"]
  }
];

const categories = [
  { name: "All Posts", count: blogPosts.length, active: true },
  { name: "Company News", count: 1, active: false },
  { name: "Wedding Ideas", count: 1, active: false },
  { name: "Technology", count: 2, active: false },
  { name: "Corporate", count: 1, active: false },
  { name: "Sustainability", count: 1, active: false }
];

export default function Blog() {
  useEffect(() => {
    document.title = "Drone Light Show Blog India | Wedding Ideas & Technology - FLYBIT Dynamics";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Read our blog for drone light show insights, wedding ideas, technology updates, and behind-the-scenes stories from FLYBIT Dynamics, India\'s premier drone show company.');
  }, []);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
                        <img src={heroImage} alt="Hero Image" className="absolute inset-0 object-cover object-center w-full h-auto opacity-90 top-20"></img>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stories from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sky</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Insights, inspiration, and behind-the-scenes stories from the world of drone light shows. Discover the magic that happens when technology meets creativity.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and insightful articles about drone technology, event planning, and creative inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden card-gradient hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    {post.category === "Company News" && <Lightbulb className="w-16 h-16 text-white" />}
                    {post.category === "Wedding Ideas" && <Heart className="w-16 h-16 text-white" />}
                    {post.category === "Technology" && <Cog className="w-16 h-16 text-white" />}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 card-gradient sticky top-24">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        category.active 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm opacity-70">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold mb-8">
                Recent <span className="text-primary">Articles</span>
              </h2>
              
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="p-6 card-gradient hover:shadow-lg transition-all duration-300 group">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="aspect-video md:aspect-square bg-muted/50 rounded-lg relative overflow-hidden">
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                        <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                          {post.category === "Sustainability" && <Lightbulb className="w-12 h-12 text-white" />}
                          {post.category === "Corporate" && <Cog className="w-12 h-12 text-white" />}
                          {post.category === "Technology" && <Cog className="w-12 h-12 text-white" />}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <CalendarDays className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="outline" size="sm">
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Our Latest Stories
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get insights, tips, and behind-the-scenes content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}