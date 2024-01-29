using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NZWalks.Data;
using NZWalks.Models.Domain;
using NZWalks.Models.DTO;

namespace NZWalks.Controllers
{
    [Route("api/regions")]
    [ApiController]
    public class RegionController : ControllerBase
    {
        private readonly NZWalksDbContext dbContext;

        public RegionController(NZWalksDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetRegionById([FromRoute] Guid id)
        {
            Region region = dbContext.Regions.Find(id);

            if(region == null)
            {
                return NotFound();
            }

            RegionDTO regionDTO = new RegionDTO{
                Id = region.Id,
                Name = region.Name,
                Code = region.Code,
                RegionImageUrl = region.RegionImageUrl,
            };

            return Ok(region);
        }

        [HttpGet]
        public IActionResult GetAllRegion()
        {
            List<Region> regions = dbContext.Regions.ToList();

            // Mapping Domain Models to DTOs
            List<RegionDTO> regionDTOs = new List<RegionDTO>();

            foreach (Region region in regions)
            {
                regionDTOs.Add(new RegionDTO
                {
                    Id = region.Id,
                    Name = region.Name,
                    Code = region.Code,
                    RegionImageUrl = region.RegionImageUrl
                });
            }

            return Ok(regionDTOs);
        }

        [HttpPost]
        public IActionResult AddRegion([FromBody] AddRegionRequestDTO requestDTO)
        {
            // map dto to domain model
            Region region = new Region{
                Name = requestDTO.Name,
                Code = requestDTO.Code,
                RegionImageUrl = requestDTO.RegionImageUrl,
            };

            dbContext.Regions.Add(region);
            dbContext.SaveChanges();

            // map domain model to dto
            // d

            return CreatedAtAction(nameof(GetRegionById), new {id = region.Id }, region);
        }
    }
}
