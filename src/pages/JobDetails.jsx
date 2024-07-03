import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JobDetails = () => {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Software Engineer</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Company:</strong> Tech Corp</p>
          <p><strong>Location:</strong> San Francisco, CA</p>
          <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p><strong>Requirements:</strong> Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.</p>
          <Button>Apply Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;