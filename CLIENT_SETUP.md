# Client setup

Use this checklist for each new customer site.

## 1. Create an independent repository

1. Confirm the master template is in the GitHub account that owns the business.
2. Mark the master as a template in GitHub repository settings.
3. Select **Use this template**, then **Create a new repository**.
4. Create one repository per client. Keep it private until the client approves public release.
5. Give the client ownership or invite the client as an owner or collaborator before handoff.

GitHub copies the template into a new repository. Client changes and history stay separate from the master.

## 2. Add approved content

1. Ask the client for their name, professional title, approved biography, services, contact details, booking link, and social profiles.
2. Get written permission for each photo, logo, testimonial, accomplishment, and gallery image.
3. Add approved files to `public/images/` with descriptive names.
4. Update `src/config/site.ts` and `public/favicon.svg`.
5. Remove every example statement that does not apply to the client.
6. Check `CLOUDFLARE_DEPLOYMENT.md` and the client's privacy notice.

Do not add policy numbers, health details, passwords, payment details, or client inquiry records to the repository.

## 3. Preview and approve

```sh
npm ci
npm run typecheck
npm run build
npm run start
```

Review desktop, tablet, and phone sizes. Check every link, heading, image alternative, phone number, email, booking link, social link, and disclosure. Get the client's approval before connecting a domain.

## 4. Handoff

Share the repository, Cloudflare project access, and domain account with the client. Keep the client's repository and hosting in an account the client controls. Never send account passwords in chat or email. Use delegated access and two-step verification.
