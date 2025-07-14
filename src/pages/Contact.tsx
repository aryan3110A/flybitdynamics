import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Instagram,
  Youtube,
  Linkedin,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/contact.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9664612798"],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@flybitdynamics.com"],
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["511, SATYAMEV EMINENCE, ", "Sola, Ahmedabad, Gujarat 380060"],
    action: "Get Directions",
    onClick: () => {
      const mapSection = document.getElementById('map-section');
      if (mapSection) {
        mapSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM"],
    action: "Schedule Call"
  }
];

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Product Launch",
  "Government Event",
  "Spiritual Gathering",
  "Sports & Entertainment",
  "Other"
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#", followers: "50K+" },
  { name: "YouTube", icon: Youtube, href: "#", followers: "25K+" },
  { name: "LinkedIn", icon: Linkedin, href: "#", followers: "10K+" },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact FLYBIT Dynamics | Book Drone Light Show India | Get Quote";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Contact FLYBIT Dynamics for booking drone light shows in India. Get quotes for wedding shows, corporate events, and aerial displays. Call +91 9664612798 for free consultation.');
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    city: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      eventType: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      city: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-16 ">
      {/* Hero Section */}
     <section 
        className="relative h-[50vh] flex items-center justify-center hero-gradient overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: "inherit"
        }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 md:pt-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Light Up the Sky <br></br><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-4xl mx-auto">
            Ready to create an unforgettable experience? Tell us your vision and we'll make it happen in the night sky.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Tell Us Your <span className="text-primary">Vision</span>
              </h2>
              
              <Card className="p-8 card-gradient">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="+91 9664612798"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventDate">Preferred Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Event city"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell Us About Your Vision *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Describe your event, audience size, special requirements, budget range, and any specific ideas you have in mind..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-glow text-lg">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Get in <span className="text-primary">Touch</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 card-gradient hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3"
                          onClick={info.onClick}
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="p-6 card-gradient mb-8">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Video Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Send className="mr-2 w-4 h-4" />
                    Request Quote
                  </Button>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 card-gradient">
                <h3 className="text-xl font-semibold mb-4">Follow Our Journey</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <social.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{social.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{social.followers}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section id="map-section" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Visit Our <span className="text-primary">Studio</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in Ahmedabad, our studio is equipped with the latest drone technology and testing facilities.
            </p>
          </div>
          
          <Card className="h-96 relative overflow-hidden flex items-center justify-center">
            {/* Google Maps Satellite View Background */}
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4!2d72.5047!3d23.0725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4c4c4c4c4%3A0x1234567890abcdef!2sSATYAMEV%20EMINENCE%2C%20Science%20City%20Rd%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e1!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'brightness(1.1) contrast(1.1) opacity(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FLYBIT Dynamics Location - SATYAMEV EMINENCE, Sola, Ahmedabad"
              ></iframe>
              {/* Overlay to prevent interaction and add subtle tint */}
              <div className="absolute inset-0 bg-blue-900/20 pointer-events-none"></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 text-center max-w-md bg-white/95 backdrop-blur-sm rounded-lg  shadow-lg border border-gray-200 top-36">
              {/* <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Our Studio</h3>
              <div className="text-gray-700 mb-2 font-medium">
                511, FLYBIT DYNAMICS PVT. LTD.,
              </div>
              <div className="text-gray-700 mb-3 font-medium">
                SATYAMEV EMINENCE
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Sola, Ahmedabad, Gujarat 380060
              </p> */}
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium"
                onClick={() => window.open('https://www.google.com/maps/search/SATYAMEV+EMINENCE,+511,+Sola,+Ahmedabad,+Gujarat+380060/@23.0719974,72.5123299,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <MapPin className="mr-2 w-4 h-4" />
                Get Directions
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have made their events unforgettable with FLYBIT Dynamics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 9664612798
            </Button>
            <Button size="lg" variant="outline" className="text-[#3D473B] border-white bg-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}