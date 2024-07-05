https://stackoverflow.com/questions/47822938/which-layer-should-be-used-for-conversion-to-dto-from-domain-object

#=====
In my experience, the mapping in the controller layer is the most flexible and simple solution.

It gives the possibility to have different DTOs for a single entity (for example DTOs based on permissions or operations) while allowing services to interact among them without useless conversions to/from DTOs.

Also, imagine a scheduled job that has to interact with a service. There's no point in using DTOs in this case. DTO are tailored for my external API. It would be just additional complexity with no benefit.

Another real example that I remember: adding (not replacing!) JSON (Jackson) endpoints to an older project that had XML (JAXB) endpoints. Newer DTOs were not the same because of different specs (not to mention the different annotations ofc). Thanks to services returning domain objects, it was just a matter of adding the new controllers with their own DTO mapping.

edit: ofc the service layer itself could also translate the domain object to yet another internal DTO. In any case I would avoid Controllers returning the same objects as Services.
