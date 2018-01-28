# Architecture Decision Record 001: Using React

## Context

We should be able to:

* share components between Play, Listen, Discover and My Sounds 
with minimum overhead
* build components using [stub data from RMS](https://github.com/bbc/rms-jimi-hendrix/blob/master/docs/arch/adr-001-experience-api-stub-response.md) based on agreed schema,
with confidence of structure and contents of the RMS response
* render views server-side for non-JS users
* develop isomorphic web applications, running JavaScript server-side and client-side

## Decision
Agreed on using React/JSX for components.

## Status
Accepted

## Consequences
This will allow create encapsulated shareable components and work with stub data following [API-first approach](https://confluence.dev.bbc.co.uk/display/SOUNDS/Technical+Design+Decisions).
