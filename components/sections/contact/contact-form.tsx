"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact"
import type { FormDict } from "@/types/dictionary"

type Props = {
    form: FormDict
}

export function ContactForm({ form }: Props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { website: "" },
    })

    async function onSubmit(data: ContactFormValues) {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok) throw new Error()

            toast.success(form.successMessage)
            reset()
        } catch {
            toast.error(form.errorMessage)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full max-w-xl"
        >
            <div className="space-y-5">
                {/* Honeypot — hidden from users; bots that fill every field trip this. */}
                <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    {...register("website")}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                        <Label htmlFor="name">{form.name}</Label>
                        <Input
                            id="name"
                            type="text"
                            autoComplete="name"
                            aria-invalid={!!errors.name}
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-xs text-destructive">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="email">{form.email}</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-xs text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="message">{form.message}</Label>
                    <Textarea
                        id="message"
                        className="min-h-32"
                        aria-invalid={!!errors.message}
                        {...register("message")}
                    />
                    {errors.message && (
                        <p className="text-xs text-destructive">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? form.sending : form.submit}
                </Button>
            </div>
        </form>
    )
}
