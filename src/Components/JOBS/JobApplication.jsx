import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobApplication() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    experience: "",
    education: "",
    role: "AI Research Scientist",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application:", formData);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ============================= */}
      {/* Decorative Lines */}
      {/* ============================= */}

      <div className="pointer-events-none absolute left-0 right-0 top-8 border-t border-dotted border-zinc-500" />

         <div className="pointer-events-none absolute left-0 right-0 top-20 border-t border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 left-0 right-0 border-t border-dotted border-zinc-500" />

        <div className="pointer-events-none absolute bottom-50 left-0 right-0 border-t border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 left-30 top-8 border-l border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 right-30 top-8 border-r border-dotted border-zinc-500" />

    

      {/* ============================= */}
      {/* Main */}
      {/* ============================= */}

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-8 lg:px-12 lg:pt-32">

        {/* Back */}
        <Link
          to="/careers/ai-research"
          className="group mb-16 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600 transition-colors duration-300 hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          Back to role
        </Link>

        {/* ============================= */}
        {/* Header */}
        {/* ============================= */}

        <div className="border-b border-zinc-900 pb-16">

          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
            Application
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            Join the team.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Apply for the AI Research Scientist position and help us advance
            Human General Intelligence.
          </p>

        </div>

        {/* ============================= */}
        {/* Form */}
        {/* ============================= */}

        <form
          onSubmit={handleSubmit}
          className="mt-20 max-w-4xl"
        >

          {/* ============================= */}
          {/* Personal Information */}
          {/* ============================= */}

          <div className="mb-16">

            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-600">
                01
              </span>

              <h2 className="text-xl font-semibold tracking-tight">
                Personal information
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">

              <Input
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />

              <Input
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />

              <Input
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

              <Input
                label="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91"
              />

              <Input
                label="Current location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
              />

            </div>

          </div>

          {/* ============================= */}
          {/* Professional Information */}
          {/* ============================= */}

          <div className="mb-16">

            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-600">
                02
              </span>

              <h2 className="text-xl font-semibold tracking-tight">
                Professional information
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">

              <Input
                label="LinkedIn"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/..."
              />

              <Input
                label="GitHub"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
              />

              <Input
                label="Portfolio / Website"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://..."
              />

              <Input
                label="Years of experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 3 years"
              />

            </div>

          </div>

          {/* ============================= */}
          {/* Education */}
          {/* ============================= */}

          <div className="mb-16">

            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-600">
                03
              </span>

              <h2 className="text-xl font-semibold tracking-tight">
                Education
              </h2>
            </div>

            <Input
              label="Education / Academic background"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Degree, university, field of study"
            />

          </div>

          {/* ============================= */}
          {/* Application */}
          {/* ============================= */}

          <div className="mb-16">

            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-600">
                04
              </span>

              <h2 className="text-xl font-semibold tracking-tight">
                Your application
              </h2>
            </div>

            {/* Role */}
            <div className="mb-8">

              <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                Applying for
              </label>

              <div className="border-b border-zinc-800 pb-4 text-sm text-zinc-300">
                {formData.role}
              </div>

            </div>

            {/* Cover Letter */}
            <div>

              <label
                htmlFor="coverLetter"
                className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600"
              >
                Why do you want to join DopsHGI?
              </label>

              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={8}
                placeholder="Tell us about yourself, your work, and why this opportunity interests you..."
                className="w-full resize-none border-b border-zinc-800 bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none transition-colors duration-300 placeholder:text-zinc-700 focus:border-zinc-400"
              />

            </div>

          </div>

          {/* ============================= */}
          {/* Resume */}
          {/* ============================= */}

          <div className="mb-16">

            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-600">
                05
              </span>

              <h2 className="text-xl font-semibold tracking-tight">
                Resume
              </h2>
            </div>

            <label
              htmlFor="resume"
              className="group flex cursor-pointer flex-col items-center justify-center border border-dashed border-zinc-800 px-6 py-14 text-center transition-colors duration-300 hover:border-zinc-600"
            >
              <span className="text-sm text-zinc-400 group-hover:text-white">
                Upload your resume
              </span>

              <span className="mt-2 text-xs text-zinc-700">
                PDF · DOC · DOCX
              </span>

              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
            </label>

          </div>

          {/* ============================= */}
          {/* Submit */}
          {/* ============================= */}

          <div className="border-t border-zinc-900 pt-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-md text-xs leading-6 text-zinc-600">
                By submitting this application, you confirm that the
                information provided is accurate and may be used for
                recruitment purposes.
              </p>

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-4 bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Submit application

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>

          </div>

        </form>

      </div>
    </section>
  );
}


/* ========================================= */
/* Reusable Input */
/* ========================================= */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-zinc-800 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-700 focus:border-zinc-400"
      />
    </div>
  );
}