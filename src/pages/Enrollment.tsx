import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { CheckCircle2, CreditCard, Lock, Calendar, Download, Home } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const steps = ["Program Selection", "Student Info", "Payment", "Confirmation"];

const Enrollment = () => {
  const [step, setStep] = useState(0);
  const [format, setFormat] = useState("");
  const [student, setStudent] = useState({
    firstName: "", lastName: "", dob: "", grade: "", school: "",
    experience: "", interests: "", goals: "", considerations: "",
  });
  const [parent, setParent] = useState({
    firstName: "", lastName: "", email: "", phone: "", relationship: "",
  });
  const [address, setAddress] = useState({
    street: "", city: "", state: "", zip: "", country: "United States",
  });
  const [emergency, setEmergency] = useState({ name: "", phone: "", relationship: "" });
  const [paymentPlan, setPaymentPlan] = useState("full");
  const [terms, setTerms] = useState({ tos: false, conduct: false, charge: false, updates: false });
  const [confirmationId] = useState(() => `AM-${Date.now().toString(36).toUpperCase()}`);

  const [submitting, setSubmitting] = useState(false);

  const nextStep = async () => {
    if (step === 0 && !format) { toast.error("Please select a program format."); return; }
    if (step === 1 && (!student.firstName || !student.lastName || !student.dob || !student.grade || !parent.firstName || !parent.lastName || !parent.email || !parent.phone || !parent.relationship || !address.street || !address.city || !address.state || !address.zip || !emergency.name || !emergency.phone || !emergency.relationship)) {
      toast.error("Please fill in all required fields."); return;
    }
    if (step === 2 && (!terms.tos || !terms.conduct || !terms.charge)) {
      toast.error("Please accept all required terms."); return;
    }

    // Save to database when completing payment step
    if (step === 2) {
      setSubmitting(true);
      const totalCharged = paymentPlan === "full"
        ? (format === "weekly" ? "$474" : "$569")
        : (format === "weekly" ? "$170" : "$203");

      const { error } = await supabase.from("enrollments").insert({
        confirmation_id: confirmationId,
        program_format: format,
        payment_plan: paymentPlan,
        student_first_name: student.firstName,
        student_last_name: student.lastName,
        student_dob: student.dob,
        student_grade: student.grade,
        student_school: student.school || null,
        student_experience: student.experience || null,
        student_interests: student.interests || null,
        parent_first_name: parent.firstName,
        parent_last_name: parent.lastName,
        parent_email: parent.email,
        parent_phone: parent.phone,
        parent_relationship: parent.relationship,
        address_street: address.street,
        address_city: address.city,
        address_state: address.state,
        address_zip: address.zip,
        address_country: address.country,
        emergency_name: emergency.name,
        emergency_phone: emergency.phone,
        emergency_relationship: emergency.relationship,
        opted_into_updates: terms.updates,
        total_charged: totalCharged,
      });

      setSubmitting(false);
      if (error) {
        toast.error("Something went wrong saving your enrollment. Please try again.");
        console.error("Enrollment save error:", error);
        return;
      }
    }

    setStep((s) => Math.min(s + 1, 3));
  };

  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-12 md:py-16">
        <div className="container-narrow text-center px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Enroll in Youth Program</h1>
          <p className="mt-2 opacity-90">Join our next cohort and start your AI native learning journey.</p>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-surface border-b border-border">
        <div className="container-narrow px-4 py-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${i <= step ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {i < step ? <CheckCircle2 size={16} /> : i + 1}
                </div>
                <span className={`hidden sm:inline text-sm font-medium ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                {i < steps.length - 1 && <div className={`w-8 h-0.5 ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-surface">
        <div className="container-narrow max-w-2xl">
          {/* Step 1: Program Selection */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Choose Your Format</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: "weekly", title: "Weekly Sessions", duration: "12 weeks", schedule: "1 hour/week + optional practice", best: "Consistent school-year learning", price: "$499" },
                  { value: "summer", title: "Summer Camp", duration: "2 weeks intensive", schedule: "Mon–Fri daily sessions", best: "Immersive summer experience", price: "$599" },
                ].map((opt) => (
                  <button key={opt.value} onClick={() => setFormat(opt.value)} className={`text-left rounded-xl border-2 p-6 transition-colors ${format === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}>
                    <h3 className="text-lg font-bold">{opt.title}</h3>
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      <li><strong>Duration:</strong> {opt.duration}</li>
                      <li><strong>Schedule:</strong> {opt.schedule}</li>
                      <li><strong>Best for:</strong> {opt.best}</li>
                    </ul>
                    <p className="mt-4 text-2xl font-bold text-primary">{opt.price}</p>
                  </button>
                ))}
              </div>
              <Button onClick={nextStep} size="lg" className="w-full gradient-accent border-0 text-accent-foreground font-bold py-6 hover:opacity-90">
                Next: Student Information
              </Button>
            </div>
          )}

          {/* Step 2: Student Info */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Student Details</h2>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>First Name *</Label><Input value={student.firstName} onChange={(e) => setStudent({ ...student, firstName: e.target.value })} required /></div>
                    <div><Label>Last Name *</Label><Input value={student.lastName} onChange={(e) => setStudent({ ...student, lastName: e.target.value })} required /></div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>Date of Birth *</Label><Input type="date" value={student.dob} onChange={(e) => setStudent({ ...student, dob: e.target.value })} required /></div>
                    <div>
                      <Label>Grade Level *</Label>
                      <Select value={student.grade} onValueChange={(v) => setStudent({ ...student, grade: v })}>
                        <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
                        <SelectContent>{["5th", "6th", "7th", "8th"].map((g) => <SelectItem key={g} value={g}>{g} Grade</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>School Name</Label><Input value={student.school} onChange={(e) => setStudent({ ...student, school: e.target.value })} /></div>
                    <div>
                      <Label>AI/Tech Experience</Label>
                      <Select value={student.experience} onValueChange={(v) => setStudent({ ...student, experience: v })}>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>{["None", "Some", "Experienced"].map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div><Label>What interests your child about AI?</Label><Textarea value={student.interests} onChange={(e) => setStudent({ ...student, interests: e.target.value })} /></div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Parent/Guardian</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>First Name *</Label><Input value={parent.firstName} onChange={(e) => setParent({ ...parent, firstName: e.target.value })} required /></div>
                    <div><Label>Last Name *</Label><Input value={parent.lastName} onChange={(e) => setParent({ ...parent, lastName: e.target.value })} required /></div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>Email *</Label><Input type="email" value={parent.email} onChange={(e) => setParent({ ...parent, email: e.target.value })} required /></div>
                    <div><Label>Phone *</Label><Input type="tel" value={parent.phone} onChange={(e) => setParent({ ...parent, phone: e.target.value })} required /></div>
                  </div>
                  <div>
                    <Label>Relationship *</Label>
                    <Select value={parent.relationship} onValueChange={(v) => setParent({ ...parent, relationship: v })}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{["Parent", "Guardian", "Other"].map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Billing Address</h3>
                <div className="space-y-4">
                  <div><Label>Street Address *</Label><Input value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} required /></div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div><Label>City *</Label><Input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} required /></div>
                    <div><Label>State *</Label><Input value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} required /></div>
                    <div><Label>ZIP *</Label><Input value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} required /></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div><Label>Name *</Label><Input value={emergency.name} onChange={(e) => setEmergency({ ...emergency, name: e.target.value })} required /></div>
                  <div><Label>Phone *</Label><Input type="tel" value={emergency.phone} onChange={(e) => setEmergency({ ...emergency, phone: e.target.value })} required /></div>
                  <div><Label>Relationship *</Label><Input value={emergency.relationship} onChange={(e) => setEmergency({ ...emergency, relationship: e.target.value })} required /></div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(0)} className="flex-1 py-6">Back</Button>
                <Button onClick={nextStep} className="flex-1 gradient-accent border-0 text-accent-foreground font-bold py-6 hover:opacity-90">Next: Payment</Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="rounded-xl bg-surface-alt border border-border p-6">
                <h3 className="font-bold mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Program:</span><span className="font-medium">{format === "weekly" ? "Weekly Sessions (12 weeks)" : "Summer Camp (2 weeks)"}</span></div>
                  <div className="flex justify-between"><span>Student:</span><span className="font-medium">{student.firstName} {student.lastName}</span></div>
                  <div className="flex justify-between border-t border-border pt-2 mt-2 text-base font-bold"><span>Total:</span><span className="text-primary">{format === "weekly" ? "$499" : "$599"}</span></div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Payment Option</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <button onClick={() => setPaymentPlan("full")} className={`text-left rounded-xl border-2 p-4 transition-colors ${paymentPlan === "full" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <p className="font-bold">Pay in Full</p>
                    <p className="text-sm text-muted-foreground">Save 5% — {format === "weekly" ? "$474" : "$569"}</p>
                  </button>
                  <button onClick={() => setPaymentPlan("plan")} className={`text-left rounded-xl border-2 p-4 transition-colors ${paymentPlan === "plan" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <p className="font-bold">Payment Plan</p>
                    <p className="text-sm text-muted-foreground">3 monthly payments of {format === "weekly" ? "$170" : "$203"}</p>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div><Label>Card Number</Label><Input placeholder="1234 5678 9012 3456" /></div>
                  <div className="grid gap-4 grid-cols-3">
                    <div><Label>Expiry</Label><Input placeholder="MM/YY" /></div>
                    <div><Label>CVV</Label><Input placeholder="123" /></div>
                    <div><Label>Name on Card</Label><Input /></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { id: "tos", label: "I agree to Terms of Service and Refund Policy *", key: "tos" as const },
                  { id: "conduct", label: "I acknowledge live online sessions and agree to Code of Conduct *", key: "conduct" as const },
                  { id: "charge", label: "I authorize charge for amount shown *", key: "charge" as const },
                  { id: "updates", label: "Send me AI education tips and updates", key: "updates" as const },
                ].map((t) => (
                  <div key={t.id} className="flex items-center gap-3">
                    <Checkbox id={t.id} checked={terms[t.key]} onCheckedChange={(c) => setTerms({ ...terms, [t.key]: !!c })} />
                    <Label htmlFor={t.id} className="text-sm">{t.label}</Label>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock size={16} className="text-success" />
                <span>Your information is encrypted and secure. Satisfaction guarantee applies.</span>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1 py-6">Back</Button>
                <Button onClick={nextStep} disabled={submitting} className="flex-1 gradient-accent border-0 text-accent-foreground font-bold py-6 hover:opacity-90">
                  <CreditCard size={18} className="mr-2" /> {submitting ? "Processing…" : "Complete Enrollment & Pay"}
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-8">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 size={48} className="text-success" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Welcome to AgenticMinds!</h2>
                <p className="mt-2 text-muted-foreground">Enrollment confirmed for {student.firstName} {student.lastName}</p>
              </div>

              <div className="rounded-xl bg-surface-alt border border-border p-6 text-left text-sm space-y-2">
                <div className="flex justify-between"><span className="text-muted-foreground">Confirmation #:</span><span className="font-mono font-bold">{confirmationId}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Program:</span><span>{format === "weekly" ? "Weekly Sessions" : "Summer Camp"}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Student:</span><span>{student.firstName} {student.lastName}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Total paid:</span><span className="font-bold">{paymentPlan === "full" ? (format === "weekly" ? "$474" : "$569") : (format === "weekly" ? "$170" : "$203")}</span></div>
              </div>

              <div className="rounded-xl bg-surface-alt border border-border p-6 text-left">
                <h3 className="font-bold mb-4">What Happens Next</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground text-xs font-bold">1</span><span><strong>Check Your Email</strong> — Confirmation sent to {parent.email}</span></li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground text-xs font-bold">2</span><span><strong>Welcome Packet</strong> (within 24 hours) — Setup guide, calendar invites, and portal access</span></li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground text-xs font-bold">3</span><span><strong>First Session</strong> — Details and login link in your welcome email</span></li>
                </ol>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="font-semibold"><Calendar size={16} className="mr-2" /> Add to Calendar</Button>
                <Button variant="outline" className="font-semibold"><Download size={16} className="mr-2" /> Download Receipt</Button>
                <Link to="/">
                  <Button className="gradient-primary border-0 text-primary-foreground font-semibold hover:opacity-90"><Home size={16} className="mr-2" /> Go to Homepage</Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">Need help? <a href="mailto:Info@AgenticMinds.net" className="text-primary hover:underline">Info@AgenticMinds.net</a></p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Enrollment;
