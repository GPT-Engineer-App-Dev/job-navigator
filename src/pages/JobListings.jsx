import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const JobListings = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    salaryRange: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 space-y-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Input
          type="text"
          name="jobType"
          placeholder="Job Type"
          value={filters.jobType}
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="salaryRange"
          placeholder="Salary Range"
          value={filters.salaryRange}
          onChange={handleFilterChange}
        />
        <Button>Apply Filters</Button>
      </aside>
      <main className="w-3/4 p-4 space-y-4">
        <h2 className="text-2xl font-semibold">Job Listings</h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Example job cards */}
          <JobCard title="Software Engineer" company="Tech Corp" location="San Francisco, CA" />
          <JobCard title="Product Manager" company="Innovate Ltd" location="New York, NY" />
          <JobCard title="UX Designer" company="Design Studio" location="Remote" />
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

const JobCard = ({ title, company, location }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{company}</p>
      <p>{location}</p>
    </CardContent>
  </Card>
);

export default JobListings;