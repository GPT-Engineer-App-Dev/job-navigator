import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We are a leading job listing website dedicated to connecting job seekers with their dream jobs. Our mission is to provide a platform where employers and job seekers can find the perfect match.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>John Doe:</strong> CEO</p>
          <p><strong>Jane Smith:</strong> CTO</p>
          <p><strong>Mike Johnson:</strong> Lead Developer</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Email:</strong> contact@jobfinder.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Job St, Employment City, Jobland</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;