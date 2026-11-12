
import { useState } from 'react'
import Navbar from '../components/Navbar'
import {
  User,
  GraduationCap,
  Code,
  FolderKanban,
  Eye,
  Target,
  Plus,
  Trash2,
  Download,
  Award,
  Trophy,
  BookOpen,
} from 'lucide-react'

function ResumeBuilder() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')

  const [college, setCollege] = useState('')
  const [degree, setDegree] = useState('')
  const [branch, setBranch] = useState('')
  const [graduationYear, setGraduationYear] = useState('')

  const [technicalSkills, setTechnicalSkills] = useState('')
  const [softSkills, setSoftSkills] = useState('')

  const [projects, setProjects] = useState([
    { name: '', description: '' },
  ])

  const [certifications, setCertifications] = useState('')
  const [achievements, setAchievements] = useState('')
  const [coursework, setCoursework] = useState('')
  const [summary, setSummary] = useState('')

  const addProject = () => {
    setProjects([...projects, { name: '', description: '' }])
  }

  const updateProject = (index, field, value) => {
    const updatedProjects = [...projects]
    updatedProjects[index][field] = value
    setProjects(updatedProjects)
  }

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  const filledProjects = projects.filter(
    (project) => project.name.trim() || project.description.trim()
  )

  const skillList = (skills) =>
    skills.split(',').map((skill) => skill.trim()).filter(Boolean)

  const downloadResume = () => {
    window.print()
  }

  return (
    <>
      <Navbar />

      {/* WHITE BACKGROUND FOR THE BUILDER WORKSPACE */}
      <div className="min-h-screen bg-white px-4 py-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#173B68]">
              Student Resume Builder
            </h1>
            <p className="text-gray-600 mt-2">
              Create a professional resume and download it as a PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT SIDE - FORM */}
            <div className="space-y-6">

              {/* PERSONAL DETAILS */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-5">
                  <User className="text-blue-600" />
                  Personal Details
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>

              {/* EDUCATION */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-5">
                  <GraduationCap className="text-blue-600" />
                  Education
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="College Name"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Branch / Specialization"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    placeholder="Graduation Year"
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>

              {/* SKILLS */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-5">
                  <Code className="text-blue-600" />
                  Skills
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Technical Skills
                    </label>
                    <textarea
                      placeholder="Python, C, Java, HTML, CSS..."
                      value={technicalSkills}
                      onChange={(e) => setTechnicalSkills(e.target.value)}
                      className="w-full border rounded-lg p-3"
                      rows="3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Soft Skills
                    </label>
                    <textarea
                      placeholder="Communication, Teamwork, Problem Solving..."
                      value={softSkills}
                      onChange={(e) => setSoftSkills(e.target.value)}
                      className="w-full border rounded-lg p-3"
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-5">
                  <FolderKanban className="text-blue-600" />
                  Projects
                </h2>

                <div className="space-y-5">
                  {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">
                          Project {index + 1}
                        </h3>

                        {projects.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeProject(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>

                      <input
                        type="text"
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) =>
                          updateProject(index, 'name', e.target.value)
                        }
                        className="w-full border rounded-lg p-3"
                      />

                      <textarea
                        placeholder="Describe your project..."
                        value={project.description}
                        onChange={(e) =>
                          updateProject(index, 'description', e.target.value)
                        }
                        className="w-full border rounded-lg p-3"
                        rows="3"
                      />
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addProject}
                    className="flex items-center gap-2 text-blue-700 font-semibold"
                  >
                    <Plus size={18} />
                    Add Another Project
                  </button>
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-3">
                  <Award className="text-blue-600" />
                  Certifications
                </h2>

                <p className="text-sm text-gray-500 mb-3">
                  Optional. Separate multiple certifications with commas.
                </p>

                <textarea
                  placeholder="e.g. Python Fundamentals - Coursera, Web Development - Udemy"
                  value={certifications}
                  onChange={(e) => setCertifications(e.target.value)}
                  className="w-full border rounded-lg p-3"
                  rows="3"
                />
              </div>

              {/* ACHIEVEMENTS */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-3">
                  <Trophy className="text-blue-600" />
                  Achievements
                </h2>

                <p className="text-sm text-gray-500 mb-3">
                  Optional. Mention awards, competitions or accomplishments.
                </p>

                <textarea
                  placeholder="e.g. Winner of college coding competition"
                  value={achievements}
                  onChange={(e) => setAchievements(e.target.value)}
                  className="w-full border rounded-lg p-3"
                  rows="3"
                />
              </div>

              {/* RELEVANT COURSEWORK */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-3">
                  <BookOpen className="text-blue-600" />
                  Relevant Coursework
                </h2>

                <p className="text-sm text-gray-500 mb-3">
                  Optional. Add subjects related to your career interests.
                </p>

                <textarea
                  placeholder="e.g. Data Structures, Database Management, Operating Systems"
                  value={coursework}
                  onChange={(e) => setCoursework(e.target.value)}
                  className="w-full border rounded-lg p-3"
                  rows="3"
                />
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2 mb-5">
                  <Target className="text-blue-600" />
                  Professional Summary
                </h2>

                <textarea
                  placeholder="Write about your career goals, strengths, interests, and the kind of role you are looking for..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full border rounded-lg p-3"
                  rows="5"
                />
              </div>
            </div>

            {/* RIGHT SIDE - LIVE PREVIEW */}
            <div>
              <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-[#173B68] flex items-center gap-2">
                  <Eye className="text-blue-600" />
                  Live Resume Preview
                </h2>

                <button
                  type="button"
                  onClick={downloadResume}
                  className="flex items-center gap-2 bg-[#173B68] text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>

              {/* PASTEL BLUE RESUME PAGE */}
              <div
                id="resume-preview"
                className="bg-[#EAF2FC] rounded-xl shadow-sm border border-blue-100 p-6 min-h-[950px]"
              >

                {/* HEADER */}
                <div className="bg-[#DCEBFA] rounded-xl text-center p-7 mb-6">
                  <h1 className="text-3xl font-bold text-[#173B68] break-words">
                    {name || 'Your Name'}
                  </h1>

                  <p className="text-[#405A78] mt-3 text-sm break-words">
                    {[email, phone, location].filter(Boolean).join(' | ') ||
                      'Email | Phone | Location'}
                  </p>
                </div>

                {/* TWO COLUMN LAYOUT */}
                <div className="resume-layout grid grid-cols-1 sm:grid-cols-[32%_minmax(0,1fr)] gap-3">

                  {/* LEFT COLUMN */}
                  <div className="bg-[#DCEBFA] rounded-xl p-5 space-y-7">

                    {/* EDUCATION */}
                    {(college || degree || branch || graduationYear) && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          EDUCATION
                        </h2>

                        {college && (
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {college}
                          </h3>
                        )}

                        <p className="text-gray-700 text-sm mt-1">
                          {[degree, branch].filter(Boolean).join(' - ')}
                        </p>

                        {graduationYear && (
                          <p className="text-gray-700 text-sm mt-1">
                            Graduation Year: {graduationYear}
                          </p>
                        )}
                      </div>
                    )}

                    {/* TECHNICAL SKILLS */}
                    {technicalSkills.trim() && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          TECHNICAL SKILLS
                        </h2>

                        <div className="flex flex-wrap gap-2">
                          {skillList(technicalSkills).map((skill, index) => (
                            <span
                              key={index}
                              className="bg-white text-[#173B68] rounded-md px-2 py-1 text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SOFT SKILLS */}
                    {softSkills.trim() && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          SOFT SKILLS
                        </h2>

                        <div className="flex flex-wrap gap-2">
                          {skillList(softSkills).map((skill, index) => (
                            <span
                              key={index}
                              className="bg-white text-[#173B68] rounded-md px-2 py-1 text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* RELEVANT COURSEWORK */}
                    {coursework.trim() && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          RELEVANT COURSEWORK
                        </h2>

                        <p className="text-gray-700 text-sm whitespace-pre-wrap">
                          {coursework}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="bg-white rounded-xl p-5 space-y-7">

                    {/* PROJECTS */}
                    {filledProjects.length > 0 && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          PROJECTS
                        </h2>

                        {filledProjects.map((project, index) => (
                          <div key={index} className="resume-project mb-5">
                            {project.name && (
                              <h3 className="font-semibold text-gray-800 text-base">
                                {project.name}
                              </h3>
                            )}

                            {project.description && (
                              <p className="text-gray-700 text-sm mt-1 whitespace-pre-wrap leading-relaxed">
                                {project.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CERTIFICATIONS */}
                    {certifications.trim() && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          CERTIFICATIONS
                        </h2>

                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                          {skillList(certifications).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* ACHIEVEMENTS */}
                    {achievements.trim() && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          ACHIEVEMENTS
                        </h2>

                        <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                          {achievements}
                        </p>
                      </div>
                    )}

                    {/* PROFESSIONAL SUMMARY - ALWAYS LAST */}
                    {summary.trim() && (
                      <div className="resume-section">
                        <h2 className="resume-heading">
                          PROFESSIONAL SUMMARY
                        </h2>

                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                          {summary}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF PRINT STYLING */}
      
<style>
  {`
    .resume-heading {
      font-size: 16px;
      font-weight: 700;
      color: #173B68;
      border-bottom: 1px solid #A9C5E5;
      padding-bottom: 8px;
      margin-bottom: 14px;
      letter-spacing: 0.3px;
    }

    @media print {
      @page {
        size: A4;
        margin: 8mm;
      }

      html, body, #root {
        height: auto !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
      }

      header {
        display: none !important;
      }

      /* Remove the page title */
      .max-w-7xl > .mb-8 {
        display: none !important;
      }

      /* Hide the form */
      .grid.grid-cols-1.lg\\:grid-cols-2 > div:first-child {
        display: none !important;
      }

      /* Remove the preview title and download button */
      .grid.grid-cols-1.lg\\:grid-cols-2 > div:last-child > .flex {
        display: none !important;
      }

      /* Remove unnecessary outer spacing */
      .min-h-screen {
        padding: 0 !important;
        margin: 0 !important;
      }

      .max-w-7xl {
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .grid.grid-cols-1.lg\\:grid-cols-2 {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      /* Resume itself */
      #resume-preview {
        position: static !important;
        width: 100% !important;
        height: auto !important;
        min-height: 0 !important;
        padding: 10px !important;
        margin: 0 !important;
        border: none !important;
        box-shadow: none !important;
        overflow: visible !important;
        border-radius: 0 !important;
        box-sizing: border-box !important;
        background: #EAF2FC !important;
      }

      body * {
        visibility: hidden !important;
      }

      #resume-preview,
      #resume-preview * {
        visibility: visible !important;
      }

      .resume-layout {
        display: grid !important;
        grid-template-columns: 32% minmax(0, 1fr) !important;
        gap: 10px !important;
      }

      /* Allow sections to flow naturally between pages */
      .resume-section {
        break-inside: auto !important;
        page-break-inside: auto !important;
      }

      /* Keep individual projects together where possible */
      .resume-project {
        break-inside: avoid;
        page-break-inside: avoid;
      }

      #resume-preview,
      #resume-preview * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `}
</style>

    </>
  )
}

export default ResumeBuilder
