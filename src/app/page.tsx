"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, MenuSquare, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "feature" },
            { name: "About", id: "about" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BrewCraft Coffee"
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Craft Coffee"
          description="Experience the perfect blend of artisanal coffee beans, expertly roasted and brewed fresh daily in our welcoming coffee shop"
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "feature" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded with a passion for exceptional coffee, we source the finest beans from sustainable farms around the world.",
            "Our expert roasters bring out unique flavors in every batch, while our skilled baristas craft each cup with precision and care."
          ]}
          buttons={[
            { text: "Learn More", href: "blog" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Signature Menu"
          description="Discover our carefully crafted coffee selections, each made with premium beans and expert technique"
          tag="Menu"
          tagIcon={MenuSquare}
          features={[
            {
              title: "Artisan Espresso",
              description: "Rich, bold espresso shots pulled from our signature blend of premium beans",
              imageSrc: "https://images.pexels.com/photos/2347380/pexels-photo-2347380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              button: { text: "Order Now", href: "contact" }
            },
            {
              title: "Handcrafted Latte",
              description: "Smooth espresso combined with steamed milk and beautiful latte art",
              imageSrc: "https://images.pexels.com/photos/207287/pexels-photo-207287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              button: { text: "Order Now", href: "contact" }
            },
            {
              title: "Cold Brew Perfection",
              description: "Slow-brewed for 12 hours to create a smooth, refreshing coffee experience",
              imageSrc: "https://images.pexels.com/photos/3752647/pexels-photo-3752647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              button: { text: "Order Now", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from our loyal customers who love our coffee and atmosphere"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9052312/pexels-photo-9052312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Freelance Writer",
              company: "Independent",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Park",
              role: "Business Consultant",
              company: "Consulting Firm",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee Lovers"
          description="Join thousands of satisfied customers who choose quality coffee"
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1876277/pexels-photo-1876277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30023630/pexels-photo-30023630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/27173014/pexels-photo-27173014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee and services"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source premium beans from sustainable farms, roast them in small batches, and brew each cup to perfection using expert techniques."
            },
            {
              id: "2",
              title: "Do you offer dairy-free options?",
              content: "Yes, we offer oat milk, almond milk, soy milk, and coconut milk alternatives for all our coffee drinks."
            },
            {
              id: "3",
              title: "Can I order online for pickup?",
              content: "Absolutely! You can place orders through our contact form and pick them up at your preferred time."
            },
            {
              id: "4",
              title: "Do you roast your own beans?",
              content: "Yes, we roast all our beans in-house to ensure maximum freshness and quality control."
            },
            {
              id: "5",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday 6:30 AM - 8:00 PM, and weekends 7:00 AM - 9:00 PM."
            },
            {
              id: "6",
              title: "Do you offer coffee subscriptions?",
              content: "Yes, we offer monthly coffee bean subscriptions with free delivery to your door."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Insights"
          description="Learn more about coffee culture, brewing techniques, and industry trends"
          tag="Blog"
          blogs={[
            {
              id: "1",
              category: "Brewing",
              title: "The Perfect Brewing Methods",
              excerpt: "Discover the art of coffee brewing with our step-by-step guide to achieving the perfect cup",
              imageSrc: "https://images.pexels.com/photos/31320336/pexels-photo-31320336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "James Wilson",
              authorAvatar: "https://images.pexels.com/photos/6205520/pexels-photo-6205520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Education",
              title: "Understanding Coffee Bean Origins",
              excerpt: "Explore how different regions produce unique flavor profiles in coffee beans",
              imageSrc: "https://images.pexels.com/photos/7717472/pexels-photo-7717472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Maria Santos",
              authorAvatar: "https://images.pexels.com/photos/6205520/pexels-photo-6205520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Skills",
              title: "Mastering Latte Art",
              excerpt: "Learn the techniques behind beautiful latte art from our expert baristas",
              imageSrc: "https://images.pexels.com/photos/34435611/pexels-photo-34435611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Alex Chen",
              authorAvatar: "https://images.pexels.com/photos/6205520/pexels-photo-6205520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Order"
          tagIcon={ShoppingBag}
          title="Ready for Great Coffee?"
          description="Place your order now or sign up for updates about new blends, special offers, and coffee events"
          inputPlaceholder="Enter your email"
          buttonText="Order Now"
          termsText="By signing up, you'll receive updates about our latest coffee blends and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Coffee",
              items: [
                { label: "Menu", href: "feature" },
                { label: "Brewing Methods", href: "blog" },
                { label: "Coffee Beans", href: "blog" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Blog", href: "blog" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Order Help", href: "contact" },
                { label: "Delivery Info", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 | BrewCraft Coffee"
        />
      </div>
    </ThemeProvider>
  );
}