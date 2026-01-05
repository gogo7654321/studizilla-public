
'use client';

import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';

type ReCaptchaCheckboxProps = {
  onChange: (token: string | null) => void;
};

export function ReCaptchaCheckbox({ onChange }: ReCaptchaCheckboxProps) {
  const { theme } = useTheme();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.error("reCAPTCHA site key not found. Please set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in your environment variables.");
    return (
        <div className="text-destructive text-sm font-semibold p-2 bg-destructive/10 rounded-md">
            reCAPTCHA is not configured correctly. Please contact support.
        </div>
    );
  }

  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  );
}
